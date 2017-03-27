# sql-crud    
A module for help with basic CRUD operations for most of the sql databases.  
### Important
The current state of this module is in developing, so you can only test with ``mysql`` today.     

However the mission is to cover Mysql, Mssql, postgres, sqlite, etc.    

You can contribute with this project whatever you want.

Github:    
https://github.com/cesarodriguez4/sql-crud

# Install
`` npm install --save-dev sql-crud``

# Concept
Despite there are several libraries for operate with sql databases, very one has a specific way to do the same operations.    

For example:

A  kind if simple statements becomes:

### mysql
``` 
//Select something
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

//Update something
connection.query('UPDATE `users` SET `id`=value WHERE 1', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

.
.
.
etc
```

### mssql
```
.
.
.
    new sql.Request().query('select * from mytable').then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        // ... Errors
    });
 .
 .
 .

```
As you can see every module has a different way to do the same work.    

So why not unify them in one single module?

# Usage
Just pass your favorite SQL database as first parameter and we'll make an irritating CRUD operation for you:
```
//Require your prefered sql module
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'host',
  user     : 'user',
  password : 'password',
  database : 'database'
});

// Sql-crud goes into action...
var sql = require("sql-crud");
var crud = new sql("mysql"); // new sql({mode: 'mysql'}) will works too

//SELECT * FROM table
crud.select(connection, 'tableName', callback);
//UPDATE table SET `field` = 'value'
crud.update(connection, 'tableName', callback);
//Any other sentence run in one single line ;)

```








