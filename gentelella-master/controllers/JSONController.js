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
// ----
var sess;
module.exports = {

    AssignTaskJSON: function (req, resp) {

        var UID = req.body.table;
        UID = JSON.parse(UID);
        console.log(UID)


        /*
        var sql = "Update capstone.users set Group = ? where User_ID = ? ";
        var values = [UID, GID];
        connection.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        */
        console.log('AssignTaskJSON')
    },


    ViewPlanTest: function (req, resp) {
        const submit = require('../public/JSONs/viewplantest.json');
        console.log(submit);
        resp.json(submit);
    },

}
