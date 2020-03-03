const express = require('express');
const fileUpload = require('express-fileupload');
const server = express();
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const md5 = require('md5');
var mysql = require('mysql');
var connection = require('../db');
// ---- URL PARSER
var url = require('url');
var session = require('express-session');
// ---- DEFINE SESSION
server.use(session({
    secret: 'ssshhhhh',
    resave: false,
    saveUninitialized: true
}));
// ----
var sess;
module.exports = {

    Viewusers: function (req, resp) {

        connection.query("SELECT users.User_ID, users.User_First, users.Role, users.User_Last, users.email_address, group.Group_Name, area.Area_Name, roles.Role_Name, users.ContactNo FROM capstone.users join capstone.group on users.Group=group.Group_ID join capstone.roles on users.Role = roles.Role_ID join capstone.area on group.Area_ID = area.Area_ID; SELECT users.Role, users.User_ID, users.User_First, users.User_Last, users.email_address, users.ContactNo FROM capstone.users where users.Group IS NULL; ", function (err, results, fields) {
            if (err) throw err;
            resp.render('./pages/Viewusers.ejs', {
                data: results[0],
                dataB: results[1]
            });
            console.log(results);
        });
        console.log("Viewusers");
    },

    Createusers: function (req, resp) {

        connection.query("SELECT * FROM capstone.roles where Role_ID > 1;", function (err, result, fields) {
            if (err) throw err;
            resp.render('./pages/CreateUser.ejs', {
                data: result
            });
            console.log(result)
        });
        console.log("Createusers");
    },

    Viewtasks: function (req, resp) {

        connection.query("Select * from capstone.tasks", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            
            resp.render('./pages/Viewtasks.ejs', {data: result});
        });
        console.log("Viewtasks");
    },

    CreateTask: function (req, resp) {
        resp.render('./pages/CreateTask.ejs');
        console.log("CreateTask");
    },

    SubmitTask: function (req, resp) {
        var TN = req.body.TaskName;
        var TD = req.body.TaskDesc;
        var GO = req.body.GenObj;
        var ME = req.body.Measurement;
        var QT = req.body.QT;
        var BS = req.body.BS;
        var sql = "INSERT INTO `capstone`.`tasks` (`Task_Name`, `Task_Desc`, `GenObj`, `Measurement`, `QT`, `BaseStandard`) VALUES (?, ?, ?, ?, ?, ?);"
        var values = [TN, TD, GO, ME, QT, BS]
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Record Inserted");
            resp.redirect("/Viewtasks")
        });


    },

    AssignTask: function (req, resp) {
        connection.query("select * from capstone.users", function (err, result, fields) {
            if (err) throw err;
            resp.render('./pages/AssignTask.ejs', {
                data: result
            });
            console.log(result);
        });
        console.log("AssignTask");
    },

    ViewGroups: function (req, resp) {
        connection.query("SELECT * FROM capstone.area; SELECT * FROM capstone.group; SELECT users.User_ID, users.User_First, users.User_Last, users.email_address, users.Role, users.Group, users.ContactNo, users.username FROM capstone.users", function (err, results, fields) {
            if (err) throw err;
            console.log(results);
            resp.render('./pages/ViewGroups.ejs', {
                dataA: results[0],
                dataB: results[1],
                dataC: results[2]
            });
        });

        console.log("ViewGroups");
    },

    CreateGroup: function (req, resp) {
        connection.query("SELECT * FROM capstone.area;", function (err, result, fields) {
            if (err) throw err;
            resp.render('./pages/CreateGroup.ejs', {
                data: result
            });
        });
        console.log("CreateGroup");
    },

    Comparativeanalysis: function (req, resp) {
        resp.render('./pages/ComparativeAnalysisAreaSelection.ejs');
        console.log("Comparativeanalysis");
    },

    Comparativeanalysis2: function (req, resp) {
        resp.render('./pages/Comparativeanalysis.ejs');
        console.log("Comparativeanalysis2");
    },

    addgroup: function (req, resp) {
        var gn = (req.body.GroupName);
        var sg = (req.body.SelectGroup);
        var gd = (req.body.GroupDesc);
        var sql = "INSERT INTO `capstone`.`group` (`Group_Name`, `Area_ID`) VALUES (? , ?)";
        var values = [gn, sg];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Record Inserted");
        });
        resp.redirect('/CreateGroup');
    },

    adduser: function (req, resp) {
        
        console.log(req.body);
        
        var fn = (req.body.firstname);
        var ln = (req.body.lastname);
        var em = (req.body.email);
        var rl = (req.body.role);
        var co = (req.body.contact);
    //    console.log(fn);
    //    console.log(ln);
    //    console.log(em);
    //    console.log(rl);
    //    console.log(co);
        var sql = "INSERT INTO `capstone`.`users` (`User_First`, `User_Last`, `email_address` , `Role`, `ContactNo`) VALUES (? , ? , ? , ? , ?)";
        var values = [fn, ln, em, rl, co];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Record Inserted");
        });
        resp.redirect('/Createusers');
    },

    edituser: function (req, resp) {
        var id = (req.query.UID);
        console.log(id);
        var values = [id];
        connection.query("SELECT * FROM capstone.users where users.User_ID = (?); SELECT * FROM capstone.roles where Role_ID > 1;", values, function (err, results) {
            if (err) throw err;
            console.log(results);
            resp.render('./pages/EditUser.ejs', {
                data: results[0],
                dataB: results[1]
            })
        });
    },

    alteruser: function (req, resp) {
        var id = (req.body.UID);
        var fn = (req.body.firstname);
        var ln = (req.body.lastname);
        var em = (req.body.email);
        var rl = (req.body.role);
        var co = (req.body.contact);
        console.log(id);
        console.log(fn);
        console.log(ln);
        console.log(em);
        console.log(rl);
        console.log(co);
        var sql = "Update capstone.users set User_First = ?, User_Last = ?, email_address = ?, Role = ?, ContactNo = ? where User_ID = ? ";
        var values = [fn, ln, em, rl, co, id];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        console.log("updating");
        setTimeout(function () {
            resp.redirect('/Viewusers');
        }, 3000);
    },

    Recommendations: function (req, resp) {
        resp.render('./pages/Recommendations.ejs');
        console.log("Recommendations");
    },

    SendPlan: function (req, resp) {
        var go = req.body.GenObj;
        var me = req.body.PlanM;
        var tn = req.body.BaseFormula;
        var qt = req.body.QualityTarget;
        var pr = req.body.Procedures;
        var RID = req.body.RID;
        console.log(go);
        console.log(me);
        console.log(tn);
        console.log(qt);
        console.log(pr);
        console.log(RID);
        var sql = "INSERT INTO `capstone`.`plans` (`GenObjective`, `Measurement`, `BaseFormula`, `QualityTarget`, `Procedures`, `recommendation_ID`) VALUES (? , ? , ? , ?, ?, ?)";
        var values = [go, me, tn, qt, pr, RID];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log(result);
            resp.redirect('/PlanPage?PID=' + RID);
        });
    },

    Planning: function (req, resp) {
        var PlanID = req.query.PID;
        var sql = "Select plans.Plan_ID, plans.GenObjective, plans.Measurement, plans.BaseFormula, plans.QualityTarget, plans.Procedures, group.Group_Name, cycle.cycle_Name, cycle.start_Date, cycle.end_Date, plans.PriorityLevel, plans.BaseStandard FROM capstone.plans join capstone.cycle on plans.CycleTime = cycle.Cycle_ID join capstone.group on plans.GroupAssigned = group.Group_ID where recommendation_ID = ?; Select recommendation.recommendation_ID, recommendation.recommendation_Name from capstone.recommendation where recommendation_ID = ?;"
        var values = [PlanID, PlanID];
        connection.query(sql, values, function (err, results, fields) {
            if (err) throw err;
            resp.render('./pages/PlanPage.ejs', {
                data: results[0],
                dataB: results[1],
            });
            console.log(results);
        });
    },

    RecommendationNonAjax: function (req, resp) {
        connection.query("Select * FROM capstone.recommendation;", function (err, results, fields) {
            if (err) throw err;
            resp.render('./pages/RecommendationNonAjax.ejs', {
                data: results
            });
            console.log("RECOMMENDATION NON AJAX");
        });
    },

    addrecommendation: function (req, resp) {
        var recommendationName = (req.body.recommendationName);
        var recommendationDesc = (req.body.recommendationDesc);
        var grade = (req.body.grade);
        var priority = (req.body.priority);
        var today = new Date();
        //var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //var dateTime = date+' '+time;
        var current = today.toISOString().split('T')[0];
        console.log(today);
        console.log(recommendationName);
        console.log(recommendationDesc);
        console.log(grade);
        console.log(priority);
        console.log(current);
        var sql = "INSERT INTO `capstone`.`recommendation` (`recommendation_Name`, `recommendation_Desc`, `recommendation_Grade` , `priority_Level`, `status`) VALUES (? , ? , ? , ?, ?)";
        var values = [recommendationName, recommendationDesc, grade, priority, current];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Record Inserted");
            connection.query("Select * FROM capstone.recommendation;", function (err, results, fields) {
                if (err) throw err;
                resp.render('./pages/RecommendationNonAjax.ejs', {
                    data: results
                });
                console.log("RECOMMENDATION NON AJAX");
            });
        });
    },

    Viewcycle: function (req, resp) {
        connection.query("Select * FROM capstone.cycle;", function (err, results, fields) {
            if (err) throw err;
            resp.render('./pages/Viewcycle.ejs', {
                data: results
            });
            console.log("View Cycle Page");
        });
    },

    addcycle: function (req, resp) {
        var cyclename = (req.body.cycleName);
        var date = (req.body.date);
        var startDate = '';
        var endDate = '';
        var startYear = date.substr(6, 4);
        var endYear = date.substr(19, 4);
        var startMonth = date.substr(0, 2);
        var endMonth = date.substr(13, 2);
        var startDay = date.substr(3, 2);
        var endDay = date.substr(16, 2);
        console.log(cyclename);
        console.log(date);
        startDate = startYear + "-" + startMonth + "-" + startDay;
        endDate = endYear + "-" + endMonth + "-" + endDay;
        console.log("Start Date: " + startDate);
        console.log("End Date: " + endDate);
        var sql = "INSERT INTO `capstone`.`cycle` (`cycle_Name`, `start_Date`, `end_Date`) VALUES (? , ? , ?)";
        var values = [cyclename, startDate, endDate];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Record Inserted");
        });
        connection.query("Select * FROM capstone.recommendation;", function (err, results, fields) {
            if (err) throw err;
            resp.render('./pages/RecommendationNonAjax.ejs', {
                data: results
            });
            console.log("RECOMMENDATION NON AJAX");
        });

    },

    editrecommendation: function (req, resp) {
        var id = (req.query.UID);
        console.log(id);
        var values = [id];
        connection.query("SELECT * FROM capstone.recommendation where recommendation.recommendation_ID = (?);", values, function (err, results) {
            if (err) throw err;
            console.log(results);
            resp.render('./pages/EditRecommendation.ejs', {
                data: results
            })
        });
        console.log("Edit Recommendations Page");
    },

    alterrecommendation: function (req, resp) {
        var id = (req.body.UID);
        var name = (req.body.recommendationName);
        var desc = (req.body.recommendationDesc);
        var grade = (req.body.grade);
        var priority = (req.body.priority);
        var date = new Date();
        var current = date.toISOString().split('T')[0];
        console.log(id);
        console.log(name);
        console.log(desc);
        console.log(grade);
        console.log(priority);
        var sql = "Update capstone.recommendation set recommendation_Name = ?, recommendation_Desc = ?, recommendation_Grade = ?, priority_Level = ?, status = ? where recommendation_ID = ?";
        var values = [name, desc, grade, priority, current, id];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        console.log("updating");
        setTimeout(function () {
            resp.redirect('/RecommendationNonAjax');
        }, 3000);
    },

    assignplantogroup: function (req, resp) {
        var id = (req.query.UID);
        var idrecommendation = (req.query.UIDRecommendation);
        console.log(id);
        var values = [id, idrecommendation];
        connection.query("SELECT * FROM capstone.plans where plans.Plan_ID = ?; SELECT group.Group_ID, group.Group_Name, area.Area_Name FROM capstone.group join capstone.area on group.Area_ID = area.Area_ID; SELECT * FROM capstone.cycle; SELECT * FROM capstone.recommendation where recommendation_ID = ?;", values, function (err, results) {
            if (err) throw err;
            console.log(results);
            resp.render('./pages/AssignPlanToGroup.ejs', {
                data: results[0],
                dataB: results[1],
                dataC: results[2],
                dataD: results[3]
            })
        });

        console.log("Edit Recommendations Page");
    },

    alterplan: function (req, resp) {
        var idrecommendation = (req.body.UIDRecommendation);
        var id = (req.body.UID);
        var group = (req.body.group);
        var cycle = (req.body.cycle);
        var priority = (req.body.priority);
        var basestandard = (req.body.basestandard);
        console.log(id);
        console.log(group);
        console.log(cycle);
        console.log(priority);
        console.log(basestandard);
        var sql = "UPDATE capstone.plans set GroupAssigned = ?, CycleTime = ?, PriorityLevel = ?, BaseStandard = ? where Plan_ID = ? ";
        var values = [group, cycle, priority, basestandard, id];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log(result);
            resp.redirect('/PlanPage?PID=' + idrecommendation);

        });

    },

    assignmembertogroup: function (req, resp) {
        var GID = req.query.GID;
        var sql = "Select users.User_ID, users.User_First, users.User_Last, users.email_address, users.Role, users.Group, users.ContactNo, users.username FROM capstone.users; SELECT group.Group_ID, group.Group_Name, area.Area_Name FROM capstone.group join capstone.area on group.Area_ID = area.Area_ID where group.Group_ID = ?;"
        var values= [GID];
        connection.query(sql, values, function (err, results, fields) {
            if (err) throw err;
            console.log(results[1])
            resp.render('./pages/AssignMemberToGroup.ejs', {
                data: results[0],
                dataB: results[1]
            });
            console.log("Assign Member to Group Page");
        });
    },

}
