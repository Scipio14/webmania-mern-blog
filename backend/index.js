const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const connectDB = require('./config/dbConn');
const  mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const PORT = process.env.PORT || 4000;
const app = express();

//connect db
mongoose.set('strictQuery',false)
connectDB();

//setting up the server
app.use('/images', express.static('public/images'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//routes
app.use('/auth',authRoutes)
app.use('/blog',blogRoutes);

//multer
const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'public/images')
  },
  filename:function(req,file,cb){
    cb(null,req.body.filename)
  }
})

const upload = multer({
  storage:storage
})

app.post('/upload',upload.single("image"),async(req,res)=>{
 return res.status(200).json({msg:"Successfully uploaded"})
})

mongoose.connection.once('open',()=>{
  console.log('Connected to MongoDB');
  app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error',err=>{
  console.log(err);
})