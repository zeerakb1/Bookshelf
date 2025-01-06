import mongoose from 'mongoose'
import colors from 'colors'

// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            dbName: 'Ecommerce',
        }); // No additional options required
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};


export default connectDB