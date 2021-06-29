const { icons } = require("../components");
const openSeekerEndPoint = "http://localhost:8000/api/tags";
const browseBar = document.getElementById("browse_bar");

async function getGenres(str) {
  const queryString = encodeURIComponent(str.trim())

  const res = await fetch(`${openSeekerEndPoint}?genres=${queryString}`);
  // console.log(res)
  if (res.ok) {
    const data = await res.json();
    if (data.genres) return data.genres
    return []
    
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
  parentList.innerHTML = ""
  for (let value of values) {
    const opt = document.createElement('option')
    opt.value = value
    parentList.appendChild(opt)
  }
}

// addevent listeners

browseBar.addEventListener("input", async (e) => {
  // console.log(e.target.value);
  const genres = await getGenres(e.target.value);
  updateOptions(document.getElementById("genres"), genres)

});
document.getElementById("add_tag").addEventListener("click", (e) => {
  enterValue();
});

browseBar.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ControlRight":
      enterValue();
      break;
    case "Enter":
      // launch research
      break;
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
