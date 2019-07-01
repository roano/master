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

const bcrypt = require('bcrypt');
const saltRounds = 10;

// ----

module.exports = {

    Register: function (req, resp) {
        // console.log(req.body.username);
        //  console.log(req.body.password);
        var user = req.body.username;
        var pass = req.body.password;
        var fname = "admin";
        var lname = "admin";
        var email = "debug@debug.com";
        var role = "1";
        var contact = "99999999999"


        bcrypt.hash(pass, saltRounds, function (err, hash) {

            var sql = "INSERT INTO `capstone`.`users` (`User_First`, `User_Last`, `email_address`, `Role`, `ContactNo`, `username`, `passwd`) VALUES (?, ?, ?, ?, ?, ?, ?);"
            var values = [fname, lname, email, role, contact, user, hash];

            connection.query(sql, values, function (err, result) {
                if (err) throw err;
                console.log("Admin Created");
                resp.redirect('/login');
            });

        });




    },

    Login: function (req, resp) {

        var user = req.body.username;
        var pass = req.body.password;
        console.log(user);
        console.log(pass);

        var sql = "SELECT users.passwd FROM capstone.users where username = ?;"
        var values = [user];

        connection.query(sql, values, function (err, result, fields) {
            if (result.length < 1) {
                console.log("user not found")
            } else {

                bcrypt.compare(pass, result[0].passwd, function (err, res) {
                    console.log(res);
                    if (res == true) {
                        resp.redirect('/login');
                        console.log("User validated");  
                    } else {
                        resp.redirect('/login');
                        console.log("Invalid user");
                    }

                });
            }

        });

    },

}
