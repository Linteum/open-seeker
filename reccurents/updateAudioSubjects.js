// processus censer stocker des données en base

const { addSubject, getAllSubjects } = require("../controller/subjects");
const {
  mergeItemsFromRaw,
} = require("../utils/arrayUtils");

// &fl%5B%5D= ---> ajoute un field a retourner
const main = async (cursor = '') => {
  console.time("main");

  const mergedItems = await mergeItemsFromRaw(cursor);

  // console.log(items)
  await Promise.all(
    mergedItems.items.map(async (subject) => {
      addSubject(subject);
    })
  );

  const subjects = await getAllSubjects()
  console.log("subjects length ====> ",subjects.length);

  console.timeEnd("main");

  main(mergedItems.cursor)
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
