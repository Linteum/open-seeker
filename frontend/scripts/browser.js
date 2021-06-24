const { icons } = require("../components");

const browseBar = document.getElementById("browse_bar");

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

document.getElementById("add_tag").addEventListener("click", (e) => {
  const value = browseBar.value.trim();
  if (value && value.length > 0) {
    const tags = pushTag(value);
    updateRmEvent(tags);
  }
});

function updateRmEvent(divList) {
  divList.forEach((tag) => {
    tag.addEventListener("click", (e) => {

      if (tag.parentNode)tag.parentNode.removeChild(tag);
    });
  });
}

function onLoad() {}

onLoad();
