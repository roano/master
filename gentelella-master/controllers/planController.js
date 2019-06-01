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
server.use(session({secret: 'ssshhhhh'})); 
// ----




module.exports = {
    Viewusers : function(req,resp){
        
        connection.query("SELECT users.User_ID, users.User_First, users.User_Last, users.email_address, group.Group_Name, users.Role, users.ContactNo FROM capstone.users join capstone.group on users.Group=group.Group_ID;", function (err, result, fields) {
            if (err) throw err;
            resp.render('./pages/Viewusers.ejs',{data : result});
            console.log(result);
            });
        
        
        
        console.log("Testing testing");
    },
    
    Createusers : function(req,resp){
         resp.render('./pages/CreateUser.ejs');
        console.log("Testing testing");
    },
    
    Viewtasks : function(req,resp){
        resp.render('./pages/Viewtasks.ejs');
        console.log("Testing testing");
    },
    
    CreateTask : function(req,resp){
        resp.render('./pages/CreateTask.ejs');
        console.log("Testing testing");
    },
    
    CreateTaskGroup : function(req,resp){
        resp.render('./pages/CreateTaskGroup.ejs');
        console.log("Testing testing");
    },
    
    AssignTask : function(req,resp){
        resp.render('./pages/AssignTask.ejs');
        console.log("Testing testing");
    },
    
    ViewGroups : function(req,resp){
        
        console.log("Testing testing");
        
        
        var res1;
        var res2;
        var res3;
          
        connection.query("SELECT * FROM capstone.area; SELECT * FROM capstone.group; SELECT * FROM capstone.users", function (err, results, fields) {
            if (err) throw err;
            console.log(results);
            resp.render('./pages/ViewGroups.ejs', {dataA : results[0], dataB : results[1], dataC : results[2]} );
            });      
        
            
    },
    
    CreateGroup : function(req,resp){
        console.log("Testing testing");
        connection.query("SELECT * FROM capstone.area;", function (err, result, fields) {
            if (err) throw err;
            resp.render('./pages/CreateGroup.ejs',{data : result});
            });
            

        },
    
    Comparativeanalysis : function(req,resp){
        resp.render('./pages/Comparativeanalysis.ejs');
        console.log("Testing testing");
    },
    
    addgroup : function(req, resp){
        var gn = (req.body.GroupName);
        var sg = (req.body.SelectGroup);
        var gd =(req.body.GroupDesc);

          var sql = "INSERT INTO `capstone`.`group` (`Group_Name`, `Area_ID`) VALUES (? , ?)";
          var values = [gn, sg];    
          connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Record Inserted");
            
          });
        
            connection.query("SELECT * FROM capstone.area;", function (err, result, fields) {
            if (err) throw err;
            resp.render('./pages/CreateGroup.ejs',{data : result});
            });

           
        },

        adduser : function(req, resp){

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

            resp.render('./pages/CreateUser.ejs')
    
               
            },

    }

    
    

