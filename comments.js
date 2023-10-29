// Create web server
// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Router
router.post('/create', commentController.create);
router.get('/delete/:id', commentController.delete);

// Export
module.exports = router;