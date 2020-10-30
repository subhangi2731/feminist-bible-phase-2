const express = require('express');
const forumController = require('../controllers/forumController');
const router = express.Router();

//like a forum post
router.route('/:forumpostid/like').post(forumController.likeForumPost)
router.route('/new').post(forumController.createPost)
module.exports = router;
