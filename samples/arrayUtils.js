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

function getRowsFromPage(body) {
  const docs = body.response.docs.map((doc) => doc.subject);
  return docs;
}

function convRawPageToSubjects(page) {
  const doc = getRowsFromPage(page);
  const subjects = mergeStringArray(doc);

  return subjects;
}
