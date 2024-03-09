import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

// export const connectToDatabase = async () => {
//   if(cached.conn) return cached.conn;

//   if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

//   cached.promise =
//     cached.promise ||
//     mongoose.connect(MONGODB_URL, {
//       dbName: 'imaginify', bufferCommands: false
//     })

//   cached.conn = await cached.promise;

//   return cached.conn;
// }

export const connectToDatabase = async () => {
  try {
    const databaseInstance = await mongoose.connect(`${MONGODB_URL}/pixvibe`);
    console.log(`MongoDB Connected !! DB Host : ${databaseInstance.connection.host}`);
  } catch (err) {
    console.log("Database Connection Failed : " ,err);
    process.exit(1)
  }
};