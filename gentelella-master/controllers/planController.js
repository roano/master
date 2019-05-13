const express = require('express');
const fileUpload = require('express-fileupload');
const server = express();
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const md5 = require('md5');
var mysql = require('mysql');
// ---- URL PARSER
var url = require('url');
var session = require('express-session');
// ---- DEFINE SESSION
server.use(session({secret: 'ssshhhhh'})); 
// ----

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'capstone'
});
module.exports = {
    Viewusers : function(req,resp){
        resp.render('./pages/Viewusers.ejs');
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
        resp.render('./pages/ViewGroups.ejs');
        console.log("Testing testing");
    },
    
    CreateGroup : function(req,resp){
        resp.render('./pages/CreateGroup.ejs');
        console.log("Testing testing");
    },
    
    
    
}
