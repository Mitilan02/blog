// import mongoose from "mongoose";

// const connectMongo = async () => mongoose.connect(process.env.MONGO_DB ?? '');
// export default connectMongo;
// // const connectMongo = async () => {
// //   if (process.env.MONGO_DB == ) {
// //     throw new Error(":x: MONGO_DB is missing");
// //   }
// //   return mongoose.connect(process.env.MONGO_DB);
// // };

// lib/connectMongo.ts
import mongoose from "mongoose";

const MONGO_DB = process.env.MONGO_DB;

if (!MONGO_DB) {
    throw new Error("Please define the MONGO_DB environment variable in your environment.");
}

let isConnected = false; // to avoid multiple connections in dev / multiple calls

const connectMongo = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(MONGO_DB);
        isConnected = true;
        // console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default connectMongo;
