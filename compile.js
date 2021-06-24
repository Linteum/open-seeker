const path = require("path");
const sass = require("node-sass");
const minify = require("minify");
const fs = require("fs");

const paths = {
  css: {
    input: "./frontend/styles/index.scss",
    output: "./source/public/style.css",
  },
};

const minifyOptions = {
  css: {
    compatibility: "*",
  },
};

sass.render(
  {
    file: paths.css.input,
  },
  async (err, result) => {
    if (err) {
      console.log("scss error: " + err.message);
      throw err;
    } else {
      fs.writeFileSync(paths.css.output, result.css.toString("utf8"));
      console.log("scss compiled");

      console.log("minifying css");
      minify(paths.css.output, minifyOptions)
        .then((data) => fs.writeFileSync(paths.css.output, data))
        .catch(console.log);
      console.log("compiling js");

      const webpack = require("webpack");
      console.log(path.resolve(__dirname, "./source/public", "js"));
      const compiler = webpack({
        mode: "development",
        target: "web",
        entry: path.resolve(__dirname, "./frontend/scripts/browser.js"),

        output: {
          filename: "app.js",
          path: path.resolve(__dirname, "./source/public", "js"),
        },
      });

      compiler.run((err, stats) => {
        // [Stats Object](#stats-object)
        // ...
        console.log("start run");
        console.log(err);
        const st = stats.toString({
          // Add console colors
          colors: true,
        });
        console.log(st);
        compiler.close((closeErr) => {
          console.log(closeErr);

          // ...
        });
      });
    }
  }
);
