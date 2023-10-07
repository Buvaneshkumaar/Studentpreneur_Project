const express=require('express');
// var fs = require('fs');
// var path = require('path');
// const Grid=require('gridfs-stream');
// const {GridFsStorage}=require('multer-gridfs-storage');
const Announce=require('../models/announce');

const multer=require('multer');

const router=express.Router();

const Storage=multer.diskStorage({
  destination:function(req,file,cb)
  {
    cb(null,'./uploadimgs');
  },filename:function(req,file,cb)
  {
    cb(null,Date.now()+file.originalname);
  }

});

// const fileFilter =(req,file,cb)=>
// {
//   if(file.mimetype==='image/jpg' || file.mimetype==='image/jpeg' || file.mimetype==='image/png')
//   {
//     cb(null,true);
//   }else{
//     cb(null,false);
//   }
// }

const uploadann=multer({
  storage:Storage,
  limits:
{
  fileSize:1024*1024*5
}
// fileFilter:fileFilter

})

// const storage= new GridFsStorage({
//     url:"mongodb+srv://sihworks001:schlenkians@cluster0.fbg8aof.mongodb.net/stdDB",
//     file:(req,file)=>
//     {
//       return{
//         filename:file.originalname,
//         bucketName:'Announcements'
//       };
//     },
//     });

//     const annupload=multer({storage});
//     module.exports={annupload};


router.post('/upload',uploadann.single('img'),async(req,res)=>
{
  
  console.log(req.body);
  try{
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' })
  };
    // uploadann(req,res,(err)=>
    // {
    //   if(err){
    //     console.log(err);
    //     return res.status(500).json({ error: 'File upload failed' });
    //   }

    //   if (!req.file) {
    //     return res.status(400).json({ error: 'No file uploaded' });
    //   }
      
        const newann= new Announce({
          img:{
            data:req.file.buffer,
            contentType:req.file.mimetype,
          },
          desc:req.body.desc || 'none',
        });
        await newann.save();
        res.status(201).json({ message: 'Announcement data entered!' });
        }
        catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
//          .then((result)=>{
//           console.log(result);
//           res.status(200).json({success:true,document:result})
//          })
//          .catch((err)=>
// {         
//    console.log(err);      
// });
});
             
   
      // Save the student document to the database
   
      

  
    //   res.status(201).json({ message: 'announcement data entered!' });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: 'Internal server error' });
    // }
  

module.exports=router;
    