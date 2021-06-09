const mysql = require('mysql');
const conf = require('./conf.js');

const mysqlConnection = mysql.createConnection({
    host: conf.db.host,
    user: conf.db.username,
    database : conf.db.database,
});

mysqlConnection.connect(error =>{
    if(error) throw error;
    console.log('Database server running');
});

module.exports = mysqlConnection;