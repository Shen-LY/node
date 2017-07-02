var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodejsdb'
});

exports


connection.connect();
connection.query("select * from user_info", function (err, rows, fields) {
    if (err) {
        throw err;
    }
    console.info(rows);
});
connection.end();
