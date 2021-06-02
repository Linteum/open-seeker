// processus censer stocker des données en base
const fetch = require("node-fetch");
const promFs = require('fs').promises
const path = require('path')

const rawDataSample = require("../samples/getSubjectFromAudioFile");
const unsortedSubjectSample = require("../samples/unsortedSubjects");
const dbFormat = require('./strToObjFormat')

const fields = ["identifier", "subject", "type"];

const rowsNumber = 100;

const formatQueryOnlyAudioSubject = (pageNum = 1) => {
  const baseUrl = "https://archive.org/advancedsearch.php";
  const query = `mediatype:audio+AND+_exists_:subject`;
  const returnedFields = fields.map((field) => `&fl[]=${field}`).join("");
  const queryConfig = `&rows=${rowsNumber}&page=${pageNum}&output=json&save=yes`;

  const uri = encodeURI(`${baseUrl}?q=${query}${returnedFields}${queryConfig}`);

  return uri;
};

const fetchData = async (uri) => {
  let res = await fetch(uri);
  const data = res.json();
  return data;
};

const getRawPage = async (pageObject) => {
  const uri = formatQueryOnlyAudioSubject(pageObject);
  const items = await fetchData(uri);

  return items;
};

const getRowsFromPage = (pageObject) => {
  const docs = pageObject.response.docs.map((doc) => doc.subject);
  return docs;
};

const convRawPageToSubjects = async (pageNum) => {
  const page = await getRawPage(pageNum);
  const doc = getRowsFromPage(page);
  const subjects = mergeStringArray(doc);

  return subjects;
};

const createArrayFromNothing = (length) => {
  return Array.from({ length: length }, (_, i) => i + 1);
};

const listSubject = async () => {
  const fileMetadata = await getRawPage();

  // calculate pages to iterate
  const numFound = fileMetadata.response.numFound;

  let pageDivider = 100;
  let pageCount = Math.floor(numFound / (rowsNumber * pageDivider));
  console.log("pages : ", pageCount);

  let items = [];
  const pageNumArray = createArrayFromNothing(pageDivider);

  const subjects = await Promise.all(
    pageNumArray.map((pn) => {
      return convRawPageToSubjects(pn);
    })
  );

  for (let sub of subjects) {
    items = items.concat(sub);
  }

  const uniq = countDuplicate(items);

  return uniq;
};

const countDuplicate = (tab) => {
  const counts = {};
  const result = [];
  tab.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  for (let key in counts) {
    const obj = {
      name: key,
      count: counts[key],
    };
    result.push(obj);
  }

  return result;
};

const mergeStringArray = (tab) => {
  const result = [];

  for (let row of tab) {
    if (Array.isArray(row)) {
      for (let subject of row) {
        result.push(subject);
      }
    } else {
      result.push(row);
    }
  }

  return result;
};
const listSubjectStatic = async (page) => {
  const data = JSON.parse(page);
  const rows = getRowsFromPage(data);

  const subjects = mergeStringArray(rows);
  const uniq = countDuplicate(subjects);

  return uniq;
};

const sortMethods = {
  increasing: (a, b) => {
    if (a.count < b.count) {
      return -1;
    }
    if (a.count > b.count) {
      return 1;
    }
    return 0;
  },
  decreasing: (a, b) => {
    if (a.count < b.count) {
      return 1;
    }
    if (a.count > b.count) {
      return -1;
    }
    return 0;
  },
  alphabetical: (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  },
  revAlphabetical: (a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  },
};

function sortArray(tab, comparator = "decr") {
  switch (comparator) {
    case "incr":
      return tab.sort(sortMethods.increasing);
    case "A-Z":
      return tab.sort(sortMethods.alphabetical);
    case "Z-A":
      return tab.sort(sortMethods.revAlphabetical);
    case "decr":
      return tab.sort(sortMethods.decreasing);
  }
}

async function updateAndWriteInBase (newArray, filePath, options =  {encoding : "utf-8"}) {

  const jsonBase =await  promFs.readFile(path.resolve(filePath), {encoding : options.encoding})
  const base = JSON.parse(jsonBase)

  // console.log()
  if (base.audioTopics.length < 1 ) {
    base.audioTopics = newArray
  }  

  await promFs.writeFile(filePath, JSON.stringify(base))
  
}

// &fl%5B%5D= ---> ajoute un field a retourner
const main = async () => {
  console.time("main");

  const sortedObjects = await listSubject();

  const sortedArray = sortArray(sortedObjects);

  updateAndWriteInBase(sortedArray, 'MockDatabase.json')



  // const formatedData = dbFormat(sortedArray)
  // console.log(formatedData);



  console.timeEnd("main");
  // return result;
};

main();

// module.exports = main;
