const express = require("express");
const cors = require("cors");
const app = express();
const EndPointCounter = require("express-list-endpoints");
require("dotenv").config();

app.use(cors());
const PORT = 9090;
app.use(express.json());
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
