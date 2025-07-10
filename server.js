import express from 'express';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import Routes from './Routes/routes.js'; 
import './Database/mongo.js'; 
const app = express();
app.use(express.json());
dotenv.config();


//Bonus: Rate limiting (simple in-memory or middleware)
const limit = rateLimit({
  windowMs: 60 * 1000, 
  max: 11,
  message: { error: '! Too many requests.' }
});

app.use(limit);


app.use('/', Routes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
