import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://mongo:27017')
  .then(() => {
    const app = express();

    app.listen(process.env.EXPRESS_PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${process.env.EXPRESS_PORT}`);
    });

    console.log('📦 Successfully connected to MongoDB');
  })
  .catch(() => console.log('⛔ Failed to connected to MongoDB'));
