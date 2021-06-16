// processus censer stocker des données en base

const { addSubject } = require("../controller/subjects");

const listSubject = async () => {
  

  // calculate pages to iterate
  
};

// &fl%5B%5D= ---> ajoute un field a retourner
const main = async () => {
  console.time("main");
  const fileMetadata = await getRawPage({rows:1});

  const numFound = fileMetadata.response.numFound;

  let pageCount = Math.floor(numFound / rowsNumber);
  pageCount = 5;

  let items = [];
  const pages = createArrayFromInt(pageCount);

  for (let pageNum of pages) {
    const page = await getRawPage(pageNum);
    const subjects = convRawPageToSubjects(page);
    console.log(subjects);
    for (let sub of subjects) {
      items = items.concat(sub);
    }
  }

  

  // const unsortedSubjects = await listSubject();
  console.log(items);

  await Promise.all(
    items.map(async (subject) => {
      addSubject(subject);
    })
  );

  
  console.timeEnd("main");
  // return result;
};

main();

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
// module.exports = main;
