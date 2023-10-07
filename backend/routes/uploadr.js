const express = require('express');
const multer = require('multer');
const router = express.Router();
const File = require('../models/uploadf');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/uploadfile', upload.single('upload'), async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    const newFile = new File({
        filename: file.originalname,
        contentType: file.mimetype,
        fileData: file.buffer // Store the file data as binary Buffer
        // Add more fields if necessary
    });

    try {
        // Save the file metadata and binary data to MongoDB Atlas
        await newFile.save();
        console.log(`File ${newFile.filename} has been saved to MongoDB Atlas.`);
        res.send('File uploaded successfully.');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/uploadfile1', async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// module.exports = router;

module.exports = router;
