const path = require("path");
const templates = "./views";

module.exports = async function (fastify, options) {
  fastify.get("/", async (req, rep) => {
    rep.view(path.join(templates, "index"), { about: "presentation" });
  });

};
