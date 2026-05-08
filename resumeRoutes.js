const express = require('express');
const { getResumes, createResume } = require('../controllers/resumeController');

const router = express.Router();

router.route('/')
    .get(getResumes)
    .post(createResume);

module.exports = router;
