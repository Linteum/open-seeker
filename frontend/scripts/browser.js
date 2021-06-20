const browseBar = document.getElementById('browse_bar')

function pushTag(value) {
  const tags = document.getElementById("tags");

  const tag = document.createElement("div");
  tag.classList.add("tag");
  tag.innerHTML = value.trim();

  tags.appendChild(tag);
}

document.getElementById("add_tag").addEventListener("click", (e) => {
    const value = browseBar.value.trim()

    if (value && value.length >0) {
        pushTag(value)
        console.log(value)
    }
});

function onstart() {
  console.log(document.querySelector("h1").textContent);
}

onstart();
