const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//mongodb crud operations start
//dbName: tmSystem
//dbPasseord: evxGZ5W1mvyK5piZ

// Replace the uri string with your connection string.

const uri = `mongodb+srv://tmSystem:DHlmLecUOKvoakpS@cluster0.jz1qjld.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const usersCollection = client.db("tmSystem").collection("tmUsers");
    const tasksCollection = client.db("tmSystem").collection("allTasks");

    //post method for save users data.
    app.post("/users", async (req, res) => {
      const query = req.body;
      const result = await usersCollection.insertOne(query);
      res.send(result);
    });

    //post method for add tasks in database.
    app.post("/all-task", async (req, res) => {
      const query = req.body;
      const result = await tasksCollection.insertOne(query);
      console.log("add task", result);
      res.send(result);
    });

    //delete method for delete tasks in database.
    app.delete("/all-task/:id", async (req, res) => {
      const query = req.params.id;
      const filter = { _id: ObjectId(id) };
      result = await tasksCollection.deleteOne(filter);
      res.send(result);
    });
    // get method for task finding

    app.get("/all-task", async (req, res) => {
      const query = {};
      const result = await tasksCollection.find(query).toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch((err) => console.log(err));

//mondodb crud end

app.get("/", (req, res) => {
  res.send(`Your app is running on port Prefectly`);
});

app.listen(port, () => {
  console.log(`my task management server is running on port ${port}`);
});
