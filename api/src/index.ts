import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://mongo:27017')
  .then(() => console.log('📦 Successfully connected to MongoDB'))
  .catch(() => console.log('⛔ Failed to connected to MongoDB'));

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.EXPRESS_PORT}`);
});
