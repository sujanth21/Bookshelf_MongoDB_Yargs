const mongoose = require("mongoose");

const database = "bookshelf";
const connectionURL = `mongodb+srv://admin:admin@learning.1c70w.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(connectionURL);
