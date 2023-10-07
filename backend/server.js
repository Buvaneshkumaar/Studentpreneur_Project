const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const passport=require('passport');
const bodyParser=require('body-parser');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose=require("passport-local-mongoose");
const Grid=require('gridfs-stream');
const GridFsStorage=require('multer-gridfs-storage');
const multer=require('multer');
const { MongoClient } = require('mongodb');
const router = express.Router();
const File = require('./models/uploadf');

mongoose.set('strictQuery','true');
let gfs;
const app=express();

app.use(cors());
app.use(express.json());


const PORT=process.env.PORT || 8080;
// DB connection
mongoose.connect("mongodb+srv://sihworks001:schlenkians@cluster0.fbg8aof.mongodb.net/stdDB?retryWrites=true&w=majority&appName=AtlasApp");
const connection=mongoose.connection;


connection.once('open',()=>{
  console.log("Database gets connected!");
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection('files'); //file chunks

    console.log('GridFS is ready');

  
    });


  //   router.get('/uploadfile', async (req, res) => {
  //     try {
  //         const files = await File.find();
  //         res.json(files);
  //     } catch (error) {
  //         res.status(500).json({ error: error.message });
  //     }
  // });
  
  // module.exports = router;


 

const studentrouter=require('./routes/route');
const authRouter=require('./routes/auth');
const announceRouter=require('./routes/admann');
const upload=require('./routes/uploadr');

app.use('/stdDB',studentrouter);
app.use('/auth', authRouter);
app.use('/announce',announceRouter);
app.use('/upload',upload);

app.listen(PORT,()=>console.log('Server is running on the port ${PORT}'));