function create(elType) {
  return document.createElement(elType);
}

function qs(target) {
  return document.querySelector(target);
}

function qsA(target) {
  return document.querySelectorAll(target);
}

function getById(id, parent = document) {
  return parent.getElementById(id);
}

function addEvent (el,evt, cb) {
    el.addEventListener(evt,cb)
}

module.exports = {
  create,
  qs,
  qsA,
  getById,
  addEvent
};
