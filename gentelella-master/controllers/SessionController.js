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

    Register: function (req, resp) {
        // console.log(req.body.username);
        //  console.log(req.body.password);
        var tohash = req.body.password;
        var hashed = md5(tohash);
        console.log(tohash);
        console.log(hashed);
        resp.render('./pages/login2');

    },

    Login: function (req, resp) {
        resp.render('./pages/Comparativeanalysis.ejs');
        console.log("Comparativeanalysis2");
    },

}
