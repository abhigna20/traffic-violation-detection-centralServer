var express = require('express')
var app = express()
var mysql = require('mysql');
var path=require('path')
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '3070',
  database: 'report_db'
});

app.get('/', function (req, res) {

  res.send('hello');
});
app.get('/test', function(req, res, next) {
  res.sendFile(path.join(__dirname+"/Public/nodes.html"));
})
app.get('/data',function(req,res){
  pool.getConnection(function(err, connection) {
    if (err) {
        console.log(err);
        return
    }
          connection.query("select * from report_db.nodes", function(err, results) {
              if (err) {
                  console.log(err);
                  return
              }
              console.log(results);
              console.log(":success");
              res.send(results);
                          res.end(JSON.stringify(results));
              connection.release(); // Don't use the connection here, it has been returned to the pool.
         });
      });
})
app.get('/test', function(req, res, next) {
  res.sendFile(path.join(__dirname+"/Public/searchviolations.html"))
})

app.get('/searchnum',function(req,res){
  pool.getConnection(function(err, connection) {
    if (err) {
        console.log(err);
        return
    }
    var num=req.query.vehnum1;
          connection.query('select * from report_db.report', function(err, results) {
              if (err) {
                  console.log(err);
                  return
              }
              console.log(results);
              console.log(":success");
              res.send(results);
                          res.end(JSON.stringify(results));
              connection.release(); // Don't use the connection here, it has been returned to the pool.
         });
      });
})
app.get('/searchloc',function(req,res){
  pool.getConnection(function(err, connection) {
    if (err) {
        console.log(err);
        return
    }
          connection.query('select * from report_db.report', function(err, results) {
              if (err) {
                  console.log(err);
                  return
              }
              console.log(results);
              console.log(":success");
              res.send(results);
                          res.end(JSON.stringify(results));
              connection.release(); // Don't use the connection here, it has been returned to the pool.
         });
      });
})
app.get('/searchtime',function(req,res){
  pool.getConnection(function(err, connection) {
    if (err) {
        console.log(err);
        return
    }
          connection.query('select * from report_db.report', function(err, results) {
              if (err) {
                  console.log(err);
                  return
              }
              console.log(results);
              console.log(":success");
              res.send(results);
                          res.end(JSON.stringify(results));
              connection.release(); // Don't use the connection here, it has been returned to the pool.
         });
      });
})
    app.listen(8000)
console.log("Listening at port 8000");
