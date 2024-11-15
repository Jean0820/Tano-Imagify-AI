import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cashed: MongooseConnection = (global as any).mongoose;

if (!cashed) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cashed = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cashed.conn) return cashed.conn;
  if (!MONGODB_URL) throw new Error("Missing MongoDB");

  cashed.promise =
    cashed.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "tano_imagify_ai",
      bufferCommands: false,
    });

    cashed.conn = await cashed.promise;

    return cashed.conn;
};
