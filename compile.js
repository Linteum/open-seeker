const path = require("path");
const sass = require("node-sass");
const fs = require("fs");

sass.render(
  {
    file: "./frontend/styles/index.scss",
  },
  async (err, result) => {
    if (err) {
      console.log("scss error: " + err.message);
      throw err;
    } else {
      fs.writeFileSync(
        "./source/public/style.css",
        result.css.toString("utf8")
      );
      console.log("scss compiled");
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
