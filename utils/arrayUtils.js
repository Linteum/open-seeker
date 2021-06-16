const { getRawPage } = require("../archiveQueries/getInfosByMedia");
const rowsNumber = 100;

function createArrayFromInt(length) {
  return Array.from({ length: length }, (_, i) => i + 1);
}

function mergeStringArray(tab) {
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
}

function getRowsFromPage(items) {
  // console.log(body)
  const docs = items.map((doc) => doc.subject);
  return docs;
}

function convRawPageToSubjects(items) {
  const doc = getRowsFromPage(items);
  const subjects = mergeStringArray(doc);

  return subjects;
}

async function mergeItemsFromRaw(cursor) {
  const result = {
    items : [],
    cursor : ''
  }

  const res = await getRawPage({cursor:cursor});
  console.log("item lefts => ", res.total)
  const subjects = convRawPageToSubjects(res.items);
  for (let sub of subjects) {
    result.items = result.items.concat(sub);
  }

  result.cursor = res.cursor
  return result;
}

module.exports = {
  mergeItemsFromRaw,
};
