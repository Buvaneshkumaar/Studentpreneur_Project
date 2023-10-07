const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
    contentType: {
        type: String
    },
    fileData: {
        type: Buffer // Store file data as binary Buffer
    }
   
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
