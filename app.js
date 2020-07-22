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

yargs.command({
  command: "list",
  describe: "List all books",
  handler: () => {
    Book.find({})
      .then((books) => {
        books.forEach((book) => {
          console.log(book.title);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

yargs.command({
  command: "read",
  describe: "Read a book",
  builder: {
    title: {
      describe: "Book title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    Book.findOne({ title: argv.title })
      .then((book) => {
        console.log(book);
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

yargs.command({
  command: "delete",
  describe: "Delete a book",
  builder: {
    title: {
      describe: "Book title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    Book.findOneAndRemove({ title: argv.title })
      .then((book) => {
        console.log("Book deleted from the DB, " + book);
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

yargs.parse();
