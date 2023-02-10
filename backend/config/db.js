

// a mongoose stuf (mongoose.connect ....) return always a promise
// const connectDB = async () => {
//     try{
//         const conn = await mongose.connect(process.env.MONGO_URI,{
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//             useCreateIndex: true
//         })
//         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
//     } catch (error) {
//       console.error(`Error: ${error.message}`.red.underline.bold)
//             process.exit(1)
//     }
// }

import mongoose from 'mongoose'
import colors from 'colors'
import { async } from 'regenerator-runtime';
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const connectDB = async () => {
// const uri = "mongodb+srv://haseeb62:Liverpool208@nodetutorial.xwhww.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });}
const connectDB = async () => {

const connection = "mongodb+srv://haseeb62:Liverpool208@nodetutorial.xwhww.mongodb.net/Ecommerce?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
}

export default connectDB