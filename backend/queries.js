const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'githubrepos'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});



function showUsers(callback) {
  connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, results);
    }
  })
}

 module.exports = { showUsers };