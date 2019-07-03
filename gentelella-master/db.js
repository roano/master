var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'capstone',
    multipleStatements: true,
    connectionLimit: 10
});


module.exports = connection;
