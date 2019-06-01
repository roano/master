var express = require('express');
var planCtrl = require('./controllers/planController');
var router = express.Router();

router.route('/Viewusers').get(planCtrl.Viewusers);
router.route('/Createusers').get(planCtrl.Createusers);
router.route('/Viewtasks').get(planCtrl.Viewtasks);
router.route('/CreateTask').get(planCtrl.CreateTask);
router.route('/CreateTaskGroup').get(planCtrl.CreateTaskGroup);
router.route('/AssignTask').get(planCtrl.AssignTask);
router.route('/ViewGroups').get(planCtrl.ViewGroups);
router.route('/CreateGroup').get(planCtrl.CreateGroup);
router.route('/Comparativeanalysis').get(planCtrl.Comparativeanalysis);
router.route('/add-group').post(planCtrl.addgroup);
router.route('/adduser').post(planCtrl.adduser);
router.route('/edituser').get(planCtrl.edituser);
router.route('/alteruser').post(planCtrl.alteruser);


module.exports = router;    