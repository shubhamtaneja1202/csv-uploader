var mysql = require('mysql');
var config = require('config');
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.passwordå
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

  