const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const authRoutes=require('./routes/auth');

const app=express();

//Middleware
app.use(cors()); //Allows frontend to talk to backend
app.use(express.json()); //allows express to understand JSON data from frontend

//Routes
app.use('/api/auth',authRoutes);

//Connect to MongoDb server
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.error("MongoDB connection error:",err));

//Start the server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Server is running on port ${PORT}');
});