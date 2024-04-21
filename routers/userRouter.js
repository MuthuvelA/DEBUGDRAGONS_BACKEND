const router = require('express').Router();
const volunteerController=require('../controllers/volunteerController')

router.post('/signup',volunteerController.register);
router.post('/setAvailabilityFalse',volunteerController.updateAvailabilityFalse);
router.post('/setAvailabilityTrue',volunteerController.updateAvailabilityTrue);
router.post('/login',volunteerController.login);
router.post('/checkPhone',volunteerController.checkPhone);
router.post("/checkUsername",volunteerController.checkUsername);
router.post('/getAsignedUnAsigned',volunteerController.getAsignedAndUnAsigned);
module.exports = router;