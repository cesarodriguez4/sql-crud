# sql-crud    
A module for help with basic CRUD operations for most of the sql databases.
    

### Important    

**This is not a stable version. I'm just working since March 2017, you can read the concept below**    

If you are interested [Watch him on github](https://github.com/cesarodriguez4/sql-crud)      
  
Collaboration is open.

# Install
`` npm install --save-dev sql-crud``

# Concept
Despite there are several libraries for operate with sql databases, very one has a specific way to do the same operations.    

For example:

A  kind if simple statements becomes:

### mysql
```javascript 
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
```javascript
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
Just pass your favorite SQL database as first parameter, the options of the query you want as second parameter, and if you want asyncronized  function.
```javascript
var sql = require('sql-crud');
var crud = new sql('mysql');  //or mssql, postgres, sqlite

//Select something
crud.select(connection, {select: 'id, name, lastname', where: {id:2}});
//Update something and do it asynchronously
crud.update(connection, {update: 'users', set: {lastname: 'Rodriguez'}}, function(error, results) {
//Do something
});
```








