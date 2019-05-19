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

var connection = require('./db');


connection.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Connected successfully');
    }
});

connection.end();

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

server.get('/home', function(req, resp){
   resp.render('./pages/home.ejs');
    console.log("Testing testing");
});

server.get('/login', function(req, resp){
   resp.render('./pages/login.ejs');
    console.log("Testing testing");
});


server.use('/',routes);
const port = process.env.PORT | 9090;
server.listen(port);