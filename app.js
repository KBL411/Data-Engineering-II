const express = require('express')
const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_server",
  user: "rayan",
  password: "secret",
  database: "test_db"
}

let db = null

const app = express()

app.get('/', function (req, res) {
  db =  mysql.createConnection(mysqlConfig);

  db.connect(function(err) {
    if (err) throw err;
    res.send('connected')
  });

  db.query('CREATE TABLE IF NOT EXISTS nb_load(id int AUTO_INCREMENT, data INT, log_time DATETIME, PRIMARY KEY(id))')

})

app.listen(5000)

console.log("listening on port 5000")