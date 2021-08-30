var mysql = require('mysql');
var config = require('config');
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

var getConnection = () => {
    con.connect(function(err, connection) {
        if (err) throw err;
    });
    return con;
}

module.exports = {
   getConnection : getConnection
};

  