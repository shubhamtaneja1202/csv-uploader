var mysql = require('mysql');
var config = require('config');
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password
});

var getConnection = () => {
    con.connect(function(err, connection) {
        if (err) throw err;
        return connection;
      });
}

module.exports = {
   getConnection : getConnection
};

  