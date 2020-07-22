const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const database = "bookshelf";
const connectionURL = `mongodb+srv://admin:admin@learning.1c70w.mongodb.net/${database}?retryWrites=true&w=majority`;

const dbConnect = (database) => {
  let connectedDB;
  MongoClient.connect(
    connectionURL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (error, client) => {
      if (error) {
        return console.log("Unable to connect to database");
      }

      connectedDB = client.db("bookshelf");
    }
  );
  console.log(connectedDB);
  return connectedDB;
};

//Add a new book to my shelf
const addNewBook = (title, desc, author) => {
  const db = dbConnect(database);
  console.log(db);
  db.collection("books")
    .insertOne({
      title: title,
      description: desc,
      author: author,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  addNewBook: addNewBook,
};
