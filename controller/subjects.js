const path = require("path");
const  Datastore = require("nedb")
var  db = new Datastore({
    filename: '../database/subjects.db',
    autoload: true,
  });

db.ensureIndex({ fieldName: "subject", unique: true });

// console.log(db)
// POST add subjects from /api/subjects
const addSubject = (subject) => {
  return new Promise((resolve, reject) => {
    db.insert({ subject: subject }, (err, newDoc) => {
      if (err) {
        if (err.errorType === "uniqueViolated") {
          return resolve(err.message);
        }
        return reject(err);
      }
      return resolve(newDoc);
    });
  });
};

// GET one subjects from /api/subjects
const getSubjects = async (searchString) => {
  return new Promise((resolve, reject) => {
    const regex = new RegExp(searchString.trim());
    console.log(regex);
    db.find({subject:regex}, (err, docs) => {
      if (err) return reject(err);

      return resolve(docs);
    });
  });
};

// GET all subjects from /api/subjects
const getAllSubjects = async () => {
  return new Promise((resolve, reject) => {
    db.find({}, (err, docs) => {
      if (err) return reject(err);

      return resolve(docs);
    });
  });
};



// PUT update subjects from /api/subjects
const updateSubject = async (query, update) => {
  return new Promise((resolve, reject) => {
    db.update(query, update, {}, (err, numReplaced) => {
      if (err) return reject(err);
      return resolve(numReplaced);
    });
  });
};

// DELETE subject from /api/subjects
const deleteSubject = async (query) => {
  return new Promise((resolve, reject) => {
    db.remove(query, {}, (err, numRemoved) => {
      if (err) return reject(err);

      return resolve(numRemoved);
    });
  });
};

module.exports = {
  getAllSubjects,
  getSubjects,
  addSubject,
  updateSubject,
  deleteSubject,
};
