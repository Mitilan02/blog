import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.MONGO_DB ?? '');
export default connectMongo;
// const connectMongo = async () => {
//   if (process.env.MONGO_DB == ) {
//     throw new Error(":x: MONGO_DB is missing");
//   }
//   return mongoose.connect(process.env.MONGO_DB);
// };