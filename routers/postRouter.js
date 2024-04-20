const router = require('express').Router();
const postController = require('../controllers/postController');
const assignVolunteer = require('../controllers/postController');

router.post('/addPost',postController.addPost);
router.post('/assignVolunteer',assignVolunteer.assignVolunteer);
module.exports = router;