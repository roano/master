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

    AssignTaskJSON: function (req, resp) {


        connection.query("select * from capstone.users", function (err, result, fields) {
            if (err) throw err;
            var preparedresult = JSON.stringify({
                data: [result]
            })
            console.log(preparedresult);
            resp.json(preparedresult);

        });
    },

}
