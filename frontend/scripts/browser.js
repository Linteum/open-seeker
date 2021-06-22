const browseBar = document.getElementById("browse_bar");

function addDiv(className, parentDiv) {
  const div = document.createElement("div");
  div.classList.add(className);
  parentDiv.appendChild(div)

  return div
}

function existingTags(tags, value) {
  if (Object.values(tags).find((tag) => tag.innerHTML.trim() == value.trim()))
    return true;

  return false;
}

function pushTag(value) {
  const tags = document.getElementById("tags");

  const tagsList = document.querySelectorAll(".tag");

  if (!existingTags(tagsList, value)) {
    const tag = addDiv("tag", tags)
    tag.innerHTML = value.trim();
  }
}

document.getElementById("add_tag").addEventListener("click", (e) => {
  const value = browseBar.value.trim();
  if (value && value.length > 0) {
    pushTag(value);
    console.log(value);
  }
});

function onLoad() {}

onLoad();
