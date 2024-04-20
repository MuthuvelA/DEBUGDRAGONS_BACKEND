const router = require('express').Router();
const postController = require('../controllers/postController');
const assignVolunteer = require('../controllers/postController');

router.post('/addPost',postController.addPost);
router.post('/deletePost',postController.deletePost);
router.post('/assignVolunteer',assignVolunteer.assignVolunteer);
router.get('/getAllPost',postController.getAllPost);
module.exports = router;