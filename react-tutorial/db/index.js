var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'MyNotes',
    port: 3001

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    connection.query("CREATE DATABASE IF NOT EXISTS myNotes", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });

    var users = "CREATE TABLE IF NOT EXISTS USERS (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),username VARCHAR(30),password VARCHAR(30),email VARCHAR(30))";
    connection.query(users, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

    var notes = "CREATE TABLE IF NOT EXISTS NOTES (id INT AUTO_INCREMENT PRIMARY KEY,text VARCHAR(500),date DATE,idu INT(20),FOREIGN KEY(idu) REFERENCES USERS(id))";
    connection.query(notes, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

});

// connection.end();

