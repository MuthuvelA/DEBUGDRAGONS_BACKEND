const router = require('express').Router();
const volunteerController=require('../controllers/volunteerController')
router.post('/volunteersignup',volunteerController.register);
module.exports = router;