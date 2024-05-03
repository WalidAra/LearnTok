const mongoose = require("mongoose");
require("dotenv").config();

const MongoDBConnect = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://walid:8v1v3YVhk7T90VlN@learntokcluster.p4n0emi.mongodb.net/?retryWrites=true&w=majority&appName=learntokCluster",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
module.exports = MongoDBConnect;
