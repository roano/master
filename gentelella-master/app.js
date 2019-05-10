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

connection.connect(function(error){
    if(!!error){
        console.log('Error could not connect');
    }else{
        console.log('Connected successfully');
    }
});

server.use(express.static( "public" ));

var routes = require('./routes');
server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));
server.use(fileUpload({ createParentPath: true, safeFileNames: true, preserveExtension: true}));
server.set('view engine', 'ejs');


server.get('/', function(req, resp){
   resp.render('./pages/home.ejs');
    console.log("Testing testing");
});


server.get('/Viewusers', function(req, resp){
   resp.render('./pages/Viewusers.ejs');
    console.log("Testing testing");
});

server.get('/Createusers', function(req, resp){
   resp.render('./pages/CreateUser.ejs');
    console.log("Testing testing");
});


server.get('/Viewtasks', function(req, resp){
   resp.render('./pages/Viewtasks.ejs');
    console.log("Testing testing");
});

server.get('/CreateTask', function(req, resp){
   resp.render('./pages/CreateTask.ejs');
    console.log("Testing testing");
});


server.get('/CreateTaskGroup', function(req, resp){
   resp.render('./pages/CreateTaskGroup.ejs');
    console.log("Testing testing");
});

server.get('/AssignTask', function(req, resp){
   resp.render('./pages/AssignTask.ejs');
    console.log("Testing testing");
});

server.get('/ViewGroups', function(req, resp){
   resp.render('./pages/ViewGroups.ejs');
    console.log("Testing testing");
});

server.get('/CreateGroup', function(req, resp){
   resp.render('./pages/CreateGroup.ejs');
    console.log("Testing testing");
});

server.get('/home', function(req, resp){
   resp.render('./pages/home.ejs');
    console.log("Testing testing");
});

server.use('/',routes);
const port = process.env.PORT | 9090;
server.listen(port);