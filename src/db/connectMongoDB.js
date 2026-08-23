import mongoose from 'mongoose';

export const connectMongoDB = async() => {
  try {
    const mongoUrl = process.env.MONGO_URL;
     
    await mongoose.connect(mongoUrl);

console.log('Database:', mongoose.connection.name);
console.log('Collection:', mongoose.modelNames());
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
