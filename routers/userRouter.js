const router = require('express').Router();
const volunteerController=require('../controllers/volunteerController')
router.post('/volunteersignup',volunteerController.register);
router.post('/setAvailabilityFalse',volunteerController.updateAvailabilityFalse);
router.post('/setAvailabilityTrue',volunteerController.updateAvailabilityTrue);
module.exports = router;