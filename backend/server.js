import app from './app.js'
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const PORT = process.env.PORT || 5000;

await connectDb();
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected successfully');
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
//   }).catch((error) => {
//     console.error('MongoDB connection failed:', error.message);
//     process.exit(1);
//   });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});