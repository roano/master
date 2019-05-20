var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'capstone',
    multipleStatements:true,
    connectionLimit : 10
});


module.exports = connection;