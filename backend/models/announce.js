const mongoose = require('mongoose');

const annSchema = new mongoose.Schema({
  img:{type:Buffer,required:true},
  desc:{type:String,default:"none",required:true},
  // date: {
  //   type: Date,
  //   default: Date.now, // Store the creation date
  // }, // Additional metadata or description about the file (optional)
},{collection:'Announcements'}
);

const Announce = mongoose.model('Announcements', annSchema);

module.exports = Announce;  