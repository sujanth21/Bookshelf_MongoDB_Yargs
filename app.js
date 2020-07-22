const yargs = require("yargs");
require("./src/db/mongoose");
const Book = require("./book");

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
  handler: function (argv) {
    const newBook = new Book({
      title: argv.title,
      description: argv.description,
      author: argv.author,
    });

    newBook
      .save()
      .then((book) => {
        console.log(book);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  },
});

yargs.parse();
