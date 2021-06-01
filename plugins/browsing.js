// processus censer stocker des données en base

const rawDataSample = require("../samples/getSubjectFromAudioFile");
const unsortedSubjectSample = require("../samples/unsortedSubjects");

const fetch = require("node-fetch");
const fields = ["identifier", "subject", "type"];

const formatUri = (rows, page) => {
  const baseUrl = "https://archive.org/advancedsearch.php";
  const query = `mediatype:audio+AND+_exists_:subject`;
  const returnedFields = fields.map((field) => `&fl[]=${field}`).join("");
  const queryConfig = `&rows=${rows}&page=${page}&output=json&save=yes`;

  const uri = encodeURI(`${baseUrl}?q=${query}${returnedFields}${queryConfig}`);

  return uri;
};

const fetchData = async (uri) => {
  let res = await fetch(uri);
  const data = res.json();
  return data;
};

const getMerdier = async (rows = 1, page = 1) => {
  const uri = formatUri(rows, page);
  const items = await fetchData(uri);

  return items;
};

const getRowsFromPage = (page) => {
  const docs = page.response.docs.map((doc) => doc.subject);
  return docs;
};

const listSubject = async () => {
  const fileMetadata = await getMerdier();

  const numFound = fileMetadata.response.numFound;
  const rowsNumber = 100;

  const pagesNumber = Math.floor(numFound / rowsNumber);
  let items = [];

  //  for eeach page I load 100 rows
  for (let i = 0; i < 3; i++) {
    console.log("page number : ", i);

    const page = await getMerdier(rowsNumber, i);
    const doc = getRowsFromPage(page);
    const subjects = mergeStringArray(doc);

    items = items.concat(subjects);
  }

  const uniq = countDuplicate(items);

  return uniq;
};

const countDuplicate = (tab) => {
  const result = [];
  for (let i = 0; i < tab.length; i++) {
    const obj = {
      count: 1,
      name: tab[i],
    };
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[j] === tab[i]) {
        obj.count += 1;
      }
    }

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
// &fl%5B%5D= ---> ajoute un field a retourner
const main = async () => {
  // await listSubjectStatic(staticData.data);
  // const result = listSubject();

  const result = sortArray(JSON.parse(unsortedSubjectSample.data), "Z-A");

  return result;
};

module.exports = main;
