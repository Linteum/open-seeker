const fetch = require("node-fetch");
const _ = require("lodash");

const mediaType = ["audio", "texts", "movies", "collection"];
const baseUrl = "https://archive.org/services/search/v1/scrape?";

function setDefaults(options, defaults) {
  return _.defaults({}, _.clone(options), defaults);
}

const fetchDatas = async (uri) => {
  let res = await fetch(uri);
  const data = res.json();
  return data;
};

const rowsFromMediaAndSubject = (options) => {
  const defaults = {
    fields: "identifier, subject",
    mediaType: "audio",
    cursor: "",
  };

  options = setDefaults(options, defaults);

  console.log(options);
  const query = `mediatype:${options.mediaType}+AND+_exists_:subject`;
  let cursorPart = "";
  if (options.cursor.length > 0) cursorPart = `&cursor=${options.cursor}`;
  const uri = encodeURI(
    `${baseUrl}q=${query}&fields=${options.fields}&count=100${cursorPart}`
  );

  return uri;
};

const getRawPage = async (options = {}) => {
  const uri = rowsFromMediaAndSubject(options);
  const items = await fetchDatas(uri);

  return items;
};

module.exports = {
  getRawPage,
};
