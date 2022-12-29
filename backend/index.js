import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import blogRoutes from './Routes/routes.js'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
mongoose.set('strictQuery', true);
app.use('/api/blog',blogRoutes);

mongoose.connect(DB_URL,{useUnifiedTopology:true, useNewUrlParser: true })
.then(app.listen(PORT,()=>console.log(`Server started on PORT : ${PORT}`)))
.then(()=>console.log("DB connected"))
.catch((err) => console.log(`${err} did not connected`));