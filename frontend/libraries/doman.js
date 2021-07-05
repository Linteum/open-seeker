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

module.exports = {
  create,
  qs,
  qsA,
  getById,
};
