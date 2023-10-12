var mysql = require('mysql');
  
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1999",
  database: "sys"
});
    
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM sys_config", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
  });
});