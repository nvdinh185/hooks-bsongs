const express = require('express');
const router = express.Router();

const songController = require('../controllers/SongController');
const middleware = require('../middleware/Middleware');

router.get('/', songController.getListSongs);
router.get('/songsbycat', songController.getListSongsByCat);
router.get('/songbyid', songController.getSongById);

// router.post('/contact', middleware.uploadFile, songController.postContact);

module.exports = router;
