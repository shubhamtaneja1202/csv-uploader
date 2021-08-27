var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

var getConnection = () => {
    con.connect(function(err, connection) {
        if (err) throw err;
        return connection;
      });
}

module.exports = getConnection;

  