const fetch = require("node-fetch");

const mediaType = ["audio", "texts", "movies", "collection"];
const fields = ["identifier", "subject", "type"];
const baseUrl = "https://archive.org/advancedsearch.php";

function calcRowsAndPages(numFound) {
  
}

const fetchDatas = async (uri) => {
  let res = await fetch(uri);
  const data = res.json();
  return data;
};

const rowsFromMediaAndSubject = (
  options = {
    fields: ["identifier", "subject"],
    mediaType: "audio",
    page: 1,
    rows: 100,
  }
) => {
  const query = `mediatype:${options.mediaType}+AND+_exists_:subject`;
  const returnedFields = options.fields
    .map((field) => `&fl[]=${field}`)
    .join("");
  const queryConfig = `&rows=${options.rows}&page=${options.page}&output=json&save=yes`;

  const uri = encodeURI(`${baseUrl}?q=${query}${returnedFields}${queryConfig}`);

  return uri;
};

const getRawPage = async (pageNum) => {
  const uri = rowsFromMediaAndSubject({ page: pageNum });
  const items = await fetchDatas(uri);

  return items;
};

module.exports = {
  getRawPage,
};
