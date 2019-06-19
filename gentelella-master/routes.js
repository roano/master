var express = require('express');
var planCtrl = require('./controllers/planController');
var JSONCtrl = require('./controllers/JSONController');
var DocCtrl = require('./controllers/DocumentController');
var router = express.Router();
//--PlanCtrl--
router.route('/Viewusers').get(planCtrl.Viewusers);
router.route('/Createusers').get(planCtrl.Createusers);
router.route('/Viewtasks').get(planCtrl.Viewtasks);
router.route('/CreateTask').get(planCtrl.CreateTask);
router.route('/CreateTaskGroup').get(planCtrl.CreateTaskGroup);
router.route('/AssignTask').get(planCtrl.AssignTask);
router.route('/ViewGroups').get(planCtrl.ViewGroups);
router.route('/CreateGroup').get(planCtrl.CreateGroup);
router.route('/Comparativeanalysis').get(planCtrl.Comparativeanalysis);
router.route('/Comparativeanalysis2').get(planCtrl.Comparativeanalysis2);
router.route('/add-group').post(planCtrl.addgroup);
router.route('/adduser').post(planCtrl.adduser);
router.route('/edituser').get(planCtrl.edituser);
router.route('/alteruser').post(planCtrl.alteruser);
router.route('/Recommendations').get(planCtrl.Recommendations);
router.route('/ViewPlans').get(planCtrl.ViewPlans);
router.route('/CreatePlan').get(planCtrl.CreatePlan);
router.route('/SendPlan').post(planCtrl.SendPlan);
router.route('/AssignPlanToGroup').get(planCtrl.AssignPlanToGroup);
router.route('/PlanPage').get(planCtrl.Planning);
//--JSONCtrl--
router.route('/AssignTaskJSON').post(JSONCtrl.AssignTaskJSON);
//--DocCtrl--
router.route('/UploadDocument').get(DocCtrl.UploadDocument);
router.route('/SendDocument').post(DocCtrl.SendDocument);

module.exports = router;
