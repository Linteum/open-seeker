const path = require("path");
const fastifyStatic = require('fastify-static');
const template = require("art-template");

module.exports = () => {
  template.defaults.minimize = true;
  template.defaults.htmlMinifierOptions = {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    // automatically merged at runtime: rules.map(rule => rule.test)
    ignoreCustomFragments: [],
  };
  const pages = "./views/";
  const fastify = require("fastify")({
    logger: true,
  });

  // register
  fastify.register(require("point-of-view"), {
    root: path.join(__dirname, "."),
    engine: {
      "art-template": template,
    },
    options: {
      minimize: true,
    },
  });

  fastify.register(require("./router"));
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, "public"),
    prefix: "/public/",
  });

  fastify.setNotFoundHandler((req, rep) => {
    rep.view(path.join(pages, "errors"), { about: "404" });
  });

  fastify.listen(process.env.PORT, (err, address) => {
    if (err) {
      fastify.log.error("toto : ", err);
      process.exit(1);
    }

    fastify.log.info(`server listening on ${address}`);
  });
};
