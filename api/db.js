import mongoose from "mongoose";
import { config } from "dotenv";

// Dontenv config
config();
const { MONGODB_PASSWD } = process.env;
// MongoDB URI
const MongoDBURI = `mongodb+srv://mdman2257:${MONGODB_PASSWD}@cluster0.w3vvt.mongodb.net/afftask?retryWrites=true&w=majority&appName=Cluster0`;

export async function connectDB() {
  // Connection to MongoDB
  try {
    const connection = mongoose.connect(MongoDBURI);
    // console.log(connection)
    if (connection) {
      console.log("Database Connected");
    }
  } catch (error) {
    console.error("Error connecting DB", error);
  }
}
