const express = require('express');
const fileUpload = require('express-fileupload');
const server = express();
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const md5 = require('md5');
var mysql = require('mysql');
var mysql2 = require('mysql2');
var connection = require('./db');
// ---- URL PARSER
var url = require('url');
var session = require('express-session');
// ---- DEFINE SESSION
server.use(session({
    secret: 'ssshhhhh'
}));
// ----
server.use(express.static("public"));

var routes = require('./routes');
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));
server.use(fileUpload({
    createParentPath: true,
    safeFileNames: true,
    preserveExtension: true
}));
server.set('view engine', 'ejs');


server.get('/', function (req, resp) {
    resp.render('./pages/home.ejs');

    console.log("Testing testing");
});

server.get('/debug', function (req, resp) {
    resp.render('./pages/login.ejs');
    console.log("Testing testing");
});

server.get('/debug1', function (req, resp) {
    resp.render('./pages/RecommendationNonAjax.ejs');
    console.log("Testing testing");
});

server.get('/debug2', function (req, resp) {
    resp.render('./pages/PlanPage.ejs');
    console.log("Testing testing");
});

server.get('/home', function (req, resp) {
    resp.render('./pages/home.ejs');
    console.log("Testing testing");
});

server.get('/login', function (req, resp) {
    console.log("Testing testing");
    resp.render('./pages/login.ejs');
});

server.post('/enter', function (req, resp) {
    console.log(req.body.username);
    console.log(req.body.password);
    console.log("Testing testing");
    resp.render('./pages/home.ejs');
});


server.use('/', routes);
const port = process.env.PORT | 9090;
server.listen(port);
