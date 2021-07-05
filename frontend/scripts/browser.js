const { icons } = require("../components");
const { create, addEvent } = require("../libraries/doman");
const openSeekerEndPoint = "http://localhost:8000/api/tags";
const browseBar = document.getElementById("browse_bar");
var currentCursor = "";

async function getGenres(str) {
  const queryString = encodeURIComponent(str.trim());

  const res = await fetch(`${openSeekerEndPoint}?genres=${queryString}`);
  // console.log(res)
  if (res.ok) {
    const data = await res.json();
    if (data.genres) return data.genres;
    return [];
  }
  return false;
}

function addDiv(parentDiv, classNames = []) {
  const div = document.createElement("div");
  classNames.map((className) => div.classList.add(className));
  parentDiv.appendChild(div);
  return div;
}

function existingTags(tags, value) {
  if (
    Object.values(tags).find((tag) => tag.dataset.value.trim() == value.trim())
  )
    return true;

  return false;
}

function pushTag(value) {
  const tags = document.getElementById("tags");
  const tagsList = document.querySelectorAll(".tag");

  if (existingTags(tagsList, value)) return document.querySelectorAll(".tag");

  const tag = addDiv(tags, ["tag"]);
  tag.innerHTML = value.trim();
  tag.dataset.value = value.trim();

  const iconWrap = addDiv(tag, ["icon-wrapper"]);
  const remIcon = addDiv(iconWrap, ["remove-icon", "interact-icon"]);
  const okIcon = addDiv(iconWrap, ["ok-icon", "interact-icon"]);

  remIcon.innerHTML = icons.remove;
  okIcon.innerHTML = icons.ok;

  return document.querySelectorAll(".tag");
}

function enterValue() {
  const value = browseBar.value.trim();
  if (value && value.length > 0) {
    const tags = pushTag(value);
    updateRmEvent(tags);
  }
  browseBar.value = "";
}

function updateOptions(parentList, values) {
  parentList.innerHTML = "";
  for (let value of values) {
    const opt = document.createElement("option");
    opt.value = value;
    parentList.appendChild(opt);
  }
}

function formatSearchQuery(tags, andMode = true) {
  const options = {
    fields: "identifier",
    mediaType: "audio",
    rows: "128",
    uri: "https://archive.org/services/search/v1/scrape",
    cursor: "",
  };
  options.query = `mediatype:${options.mediaType}`;
  for (let tag of tags) {
    if (andMode) options.query += `+AND+subject:"${tag}"`;
  }
  const uri = encodeURI(
    `${options.uri}?q=${options.query}&fields=${options.fields}&count=${options.rows}${options.cursor}`
  );
  return uri;
}

function getTagList() {
  const tags = document.querySelectorAll(".tag");
  return Object.values(tags).map((el) => {
    return el.dataset.value;
  });
}

async function getIdsFromAO(uri) {
  const res = await fetch(uri);
  if (res.ok) {
    const data = await res.json();

    return data;
  }
  return false;
}

async function getMetaFromId(id) {
  const res = await fetch(`https://archive.org/metadata/${id}`);

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return false;
}

const aOItem = {
  getTracks: (item) => {
    const files = item.files;
    const tracks = files.filter((file) => file.format.includes("MP3"));
    return tracks.map((file, index) => {
      return {
        name: file.name,
        dms: parseFloat(file.length) * 1000,
        trackNum: file.track || `${index + 1}`,
      };
    });
  },
  getThumb: (item) => {
    // console.log(items)
    const files = item.files;
    const thumb = files.find((file) => {
      return (
        file.format.includes("JPEG Thumb") || file.format.includes("Item Tile")
      );
    });
    // console.log(thumb)
    if (thumb) return thumb.name;
    return false;
  },
  reformat: (item) => {
    const result = {
      path1: `https://${item.d1}${item.dir}/`,
      path2: `https://${item.d2}${item.dir}/`,
      thumbnail: aOItem.getThumb(item),
      title: item.metadata.title,
      id: item.metadata.identifier,
      uploader: item.metadata.uploader,
      upload_date: item.metadata.addeddate,
      tracks: aOItem.getTracks(item),
      tags: item.metadata.subject,
      item_page: `https://archive.org/details/${item.metadata.identifier}`,
    };
    console.log(result);
    return result;
  },
};

function spawnThumb(parentDiv, metas) {
  const album = create("div");
  album.classList.add("album");
  const wrapper = create("div");
  wrapper.classList.add("album-wrapper");
  const thumbnail = create("div");
  thumbnail.classList.add("thumbnail");
  const playBtn = create("div");
  playBtn.classList.add("player-btn");
  const img = create("img");
  img.classList.add("thumb-img");
  img.src = metas.path1 + metas.thumbnail || "default";
  img.alt = "none";

  const link = create("div");
  link.classList.add("link-wrapper");
  // link.dataset.link = metas.item_page;
  addEvent(link, "click", (e) => {
    window.open(metas.item_page, "_blank");
  });
  const title = create("div");
  title.innerHTML = metas.title;
  const author = create("div");
  author.innerHTML = metas.uploader;

  parentDiv.appendChild(album);
  album.appendChild(wrapper);
  wrapper.appendChild(thumbnail);
  thumbnail.appendChild(playBtn);
  thumbnail.appendChild(img);

  wrapper.appendChild(link);
  link.appendChild(title);
  link.appendChild(author);
}

// function reformatAOItem

// function getThumbObj

function itemAOHandler(data, reset) {
  const wrapper = document.getElementById("albums");
  if (reset) wrapper.innerHTML = "";

  if (Array.isArray(data.items)) {
    data.items.map(async (item) => {
      const metas = await getMetaFromId(item.identifier);
      const formated = aOItem.reformat(metas);
      spawnThumb(wrapper, formated);
    });
  }
  console.log(data.cursor);
  currentCursor = data.cursor;
}
async function research(reset = true) {
  const tags = getTagList();
  const uri = formatSearchQuery(tags);
  const data = await getIdsFromAO(uri);
  itemAOHandler(data, reset);
  // const items = names.map(itemAOHandler);
}
// ia601901.us.archive.org/32/items/001WeedProblem/001.mp3
// addevent listeners

browseBar.addEventListener("input", async (e) => {
  // console.log(e.target.value);
  const genres = await getGenres(e.target.value);
  updateOptions(document.getElementById("genres"), genres);
});
document.getElementById("add_tag").addEventListener("click", (e) => {
  enterValue();
});

document.getElementById("research").addEventListener("click", (e) => {
  research();
});

browseBar.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    const value = browseBar.value.trim();
    if (value.length > 0) {
      enterValue();
    } else {
      research();
    }
  }
});

function updateRmEvent(divList) {
  divList.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      if (tag.parentNode) tag.parentNode.removeChild(tag);
    });
  });
}

function onLoad() {}

onLoad();
