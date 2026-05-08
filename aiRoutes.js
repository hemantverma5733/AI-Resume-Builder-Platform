const express = require('express');
const { generateBullets } = require('../controllers/aiController');

const router = express.Router();

router.post('/generate', generateBullets);

module.exports = router;
