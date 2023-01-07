import mongoose from "mongoose";
import config from "./config.js";

(async () => {
  try {
    mongoose.set('strictQuery', false);
    
    const db = await mongoose.connect(config.mongodbURL,
      { useNewUrlParser: true })

    console.log("Database is connected to: ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();