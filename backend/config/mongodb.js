const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({ path: "./backend/.env" });

const uri = String(process.env.MONGODB_URL);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

async function closeDatabaseConnection() {
  try {
    if (client.topology.isConnected()) {
      await client.close();
    }
  } catch (error) {
    console.error("Error closing connection to MongoDB:", error);
    throw error;
  }
}

module.exports = { connectToDatabase, closeDatabaseConnection };
