const mysql = require('mysql');
//set database connection credentials
const config = {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'api'
};
//Create a Mysql pool
const pool = mysql.createPool(config);
//Export the pool
module.exports = pool;