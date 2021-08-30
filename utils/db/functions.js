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
}


var runQuery = (sql, values) => {
    return new Promise(function (resolve, reject) {
      if(!values){
        values = [];
      }
      console.log(sql,values);
      con.query(sql,values, function (err, results, fields) {
        if (err) return reject(err);
        return resolve(results);
      });
    });
};

var beginTransaction = () => {
  con.beginTransaction();
  return true;
}

var commit = () => {
  con.commit();
  return true;
}

var rollback = () => {
  con.rollback();
  return true;
}
getConnection();
module.exports = {
   runQuery,
   beginTransaction,
   commit,
   rollback
};

  