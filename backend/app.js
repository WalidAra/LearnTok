const express = require("express");
const cors = require("cors");
const app = express();
const EndPointCounter = require("express-list-endpoints");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
const PORT = 9090;
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://walid:8v1v3YVhk7T90VlN@learntokcluster.p4n0emi.mongodb.net/learntok?retryWrites=true&w=majority&appName=learntokCluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello Welcome to LEARN TOK API");
});

const router = require("./apis/routes.js");
app.use("/api", router);

console.log("====================================");
console.log("You Made", EndPointCounter(router).length, "APIS Mr.Exotic :D");
console.log("====================================");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} \nhttp://localhost:${PORT}`);
});
