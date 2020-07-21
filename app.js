const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add new book to my bookshelf",
  builder: {
    title: {
      describe: "Book title",
      demandOption: true,
      type: "string",
    },
    description: {
      describe: "Book description",
      demandOption: true,
      type: "string",
    },
    author: {
      describe: "Book author",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Adding a new book to the shelf", argv);
  },
});

yargs.parse();
