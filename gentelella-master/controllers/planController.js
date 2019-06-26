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
    secret: 'ssshhhhh'
}));
// ----

module.exports = {

    Viewusers: function (req, resp) {

        connection.query("SELECT users.User_ID, users.User_First, users.User_Last, users.email_address, group.Group_Name, roles.Role_Name, users.ContactNo FROM capstone.users join capstone.group on users.Group=group.Group_ID join capstone.roles on users.Role = roles.Role_ID; SELECT * FROM capstone.users where users.Group IS NULL and User_ID > 1; ", function (err, results, fields) {
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
        resp.render('./pages/Viewtasks.ejs');
        console.log("Viewtasks");
    },

    CreateTask: function (req, resp) {
        resp.render('./pages/CreateTask.ejs');
        console.log("CreateTask");
    },

    CreateTaskGroup: function (req, resp) {
        resp.render('./pages/CreateTaskGroup.ejs');
        console.log("CreateTaskGroup");
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


        connection.query("SELECT * FROM capstone.area; SELECT * FROM capstone.group; SELECT * FROM capstone.users", function (err, results, fields) {
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

        var fn = (req.body.firstname);
        var ln = (req.body.lastname);
        var em = (req.body.email);
        var rl = (req.body.role);
        var co = (req.body.contact);

        console.log(fn);
        console.log(ln);
        console.log(em);
        console.log(rl);
        console.log(co);

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

        console.log(go);
        console.log(me);
        console.log(tn);
        console.log(qt);
        console.log(pr);

        var sql = "INSERT INTO `capstone`.`plans` (`GenObjective`, `Measurement`, `BaseFormula`, `QualityTarget`, `Procedures`) VALUES (? , ? , ? , ?, ?)";


        var values = [go, me, tn, qt, pr];

        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log(result);
            resp.redirect('/PlanPage');

        });



    },

    Planning: function (req, resp) {
        resp.render('./pages/PlanPage.ejs');
        console.log("PlanPage");

    },

    RecommendationNonAjax: function (req, resp) {
        resp.render('./pages/RecommendationNonAjax.ejs');
        console.log("RECOMMENDATION NON AJAX");

    },

    

}
