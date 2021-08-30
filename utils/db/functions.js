var mysql = require('mysql');
var config = require('config');
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

// setting up connection
init = () => {
  con.connect(function(err, connection) {
    if (err) throw err;
});  
}

const runQuery = (sql, values) => {
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

const beginTransaction = () => {
  con.beginTransaction();
  return true;
}

const commit = () => {
  con.commit();
  return true;
}

const rollback = () => {
  con.rollback();
  return true;
}
module.exports = {
   runQuery,
   beginTransaction,
   commit,
   rollback
};

  