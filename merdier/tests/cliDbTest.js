const argv = require("yargs")
  .describe("m", "match string")
  .alias("m", "match")
  .describe("c", "research cursor")
  .alias("c", "cursor")
  .defaults('c', '')
  .help("h")
  .alias("h", "help")
  .argv;


//   W3siaWRlbnRpZmllclNvcnRlciI6InNpaXZhZ3VubmVyLXZvaWNlc3JpcHMtbXAzLTEwMHRvMTk5In1d
const { getSubjects } = require("../controller/subjects");

async function main() {
  const items = await getSubjects(argv.match);
  if (items.length > 0) {
    return console.log(items);
  }
  return console.log("no mathing patterns");
}

main();
