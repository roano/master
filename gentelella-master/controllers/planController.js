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
        
        connection.query("SELECT users.User_ID, users.User_First, users.User_Last, users.email_address, group.Group_Name, roles.Role_Name, users.ContactNo FROM capstone.users join capstone.group on users.Group=group.Group_ID join capstone.roles on users.Role = roles.Role_ID; SELECT * FROM capstone.users where users.Group IS NULL and User_ID > 1; ", function (err, results, fields) {
            if (err) throw err;
            resp.render('./pages/Viewusers.ejs',{data : results[0], dataB : results[1]});
            console.log(results);
            });
        
        
        
        console.log("Testing testing");
    },
    
    Createusers : function(req,resp){
         
        connection.query("SELECT * FROM capstone.roles where Role_ID > 1;", function (err, result, fields) {
            if (err) throw err;
            resp.render('./pages/CreateUser.ejs',{data : result});
            console.log(result)
            });
        
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
        connection.query("select * from capstone.users", function (err, result, fields){
            if (err) throw err;
                fs.writeFile('./public/JSONs/table.json', JSON.stringify(result), function (err) {
                if (err) throw err;
                console.log('Saved!');
                });
            resp.render('./pages/AssignTask.ejs', {data : result});
            console.log(result);
        });
        console.log("Testing testing");
    },
    
    ViewGroups : function(req,resp){
        
        console.log("Testing testing");
        
          
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

            connection.query("SELECT * FROM capstone.roles where Role_ID > 1;", function (err, result, fields) {
            if (err) throw err;
            resp.render('./pages/CreateUser.ejs',{data : result});
            console.log(result)
            });
    
               
            },
    
    edituser : function(req, resp){

            var id = (req.query.UID);
    
            console.log(id);

          var values = [id];    
            
            
            
          connection.query("SELECT * FROM capstone.users where users.User_ID = (?); SELECT * FROM capstone.roles where Role_ID > 1;", values, function (err, results) {
            if (err) throw err;
            console.log(results);
            resp.render('./pages/EditUser.ejs',{data : results[0], dataB : results[1]})
          });

    
               
            },
    
    alteruser : function(req, resp){
        
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
        
        setTimeout(function() {
            connection.query("SELECT users.User_ID, users.User_First, users.User_Last, users.email_address, group.Group_Name, roles.Role_Name, users.ContactNo FROM capstone.users join capstone.group on users.Group=group.Group_ID join capstone.roles on users.Role = roles.Role_ID; SELECT * FROM capstone.users where users.Group IS NULL and User_ID > 1; ", function (err, results, fields) {
            if (err) throw err;
            resp.render('./pages/Viewusers.ejs',{data : results[0], dataB : results[1]});
            console.log(results);
            });
        }, 3000);
    

               
            },

    UploadDocument : function(req,resp){
              resp.render('./pages/UploadDocument.ejs');
              console.log("Testing testing");
        },

    }

    
    

