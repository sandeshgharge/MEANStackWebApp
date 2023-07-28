const { MongoClient } = require('mongodb');
//const uri = "mongodb+srv://<username>:<password>@cluster0.vau4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const uri = "mongodb+srv://sg27875:MITws2122@cluster0.vau4y.mongodb.net/mit-ws-2122?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});