const {
  connectToDatabase,
  closeDatabaseConnection,
} = require("../../config/mongodb");

const { connectToDatabase } = require("../config/mongodb");

async function GetCollection(collectionName) {
  try {
    const client = await connectToDatabase();
    const db = client.db("learntok");
    const collection = db.collection(collectionName);
    return collection;
  } catch (error) {
    console.error(`Error getting collection ( ${collectionName} )`, error);
    throw error;
  }
}

const searchModel = {
  setSearchProgress: async (searchValue) => {
    const collection = await GetCollection("search");
    try {
      const existingSearch = await collection.findOne({
        searchValue: searchValue,
      });

      if (existingSearch) {
        await collection.updateOne({ searchValue }, { $inc: { progress: 1 } });
      } else {
        await collection.insertOne({
          searchValue,
          progress: 1,
        });
      }
    } catch (error) {
      console.error(
        "Failed to set search progress ( search model )  : " + error
      );
    }
  },

  getAllSearchProgress: async () => {
    const collection = await GetCollection("search");
    try {
      const result = await collection.find().toArray();
      return result;
    } catch (error) {
      console.error(
        "Failed to get all search progress ( search model ) : " + error
      );
    }
  },

  calculateTotalProgress: async () => {
    const collection = await GetCollection("search");
    try {
      const aggregationResult = await collection
        .aggregate([
          {
            $group: {
              _id: null,
              totalProgress: { $sum: "$progress" },
            },
          },
        ])
        .toArray();

      const totalProgress =
        aggregationResult.length > 0 ? aggregationResult[0].totalProgress : 0;

      return totalProgress;
    } catch (error) {
      console.error(
        "Failed to get total search progress ( search model ) : " + error
      );
    }
  },
};
module.exports = searchModel;
