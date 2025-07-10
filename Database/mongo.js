import mongoose from 'mongoose';

const mongoUrl = "mongodb+srv://kaush:oro1234@urlshorten.06fstml.mongodb.net/";

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

export default db;
