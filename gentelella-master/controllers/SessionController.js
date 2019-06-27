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
        var user = req.body.username;
        var hashed = md5(req.body.password);
        var fname = "admin";
        var lname = "admin";
        var email = "debug@debug.com";
        var role = "1";
        var contact = "99999999999"
        console.log(hashed);
        
        
        var sql = "INSERT INTO `capstone`.`users` (`User_First`, `User_Last`, `email_address`, `Role`, `ContactNo`, `username`, `passwd`) VALUES (?, ?, ?, ?, ?, ?, ?);"
        var values = [fname, lname, email, role, contact, user, hashed];
        
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log("Admin Created");
            resp.redirect('/SessLogin');
        });



    },

    Login: function (req, resp) {
        resp.render('./pages/login.ejs');
        console.log("Login");
    },

}
