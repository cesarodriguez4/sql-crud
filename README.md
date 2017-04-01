# sql-crud    
A module for help with basic CRUD operations for most of the sql databases.
    

### Important    

**This is not a stable version. I'm just working since March 2017, you can read the concept below**    

If you are interested [Watch him on github](https://github.com/cesarodriguez4/sql-crud)      
  
Collaboration is open.

# Install
`` npm install --save-dev sql-crud``

# Concept
Despite there are several libraries for operate with sql databases, every one has a specific way to do the same operations.    

For example:

### mysql
```javascript 
//Select something
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
.
.
.

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

So why not unify using the same methods?

# Usage
Just pass your favorite SQL database as first parameter, the options of the query you want as second parameter, and if you want use an asyncronized  function.
```javascript
var sql = require('sql-crud');
var crud = new sql('mysql');  //or mssql, postgres, sqlite

//Select something
crud.select(connection, {select: 'id, name, lastname', where: {id:2}});
//Update something while plays something cool asynchronously
crud.update(connection, {update: 'users', set: {lastname: 'Rodriguez'}}, function(error, results) {
//Do something
});
```
# API
The options explained below are available for use it. If you find some problem please consider open a issue in github.
## Select:
```javascript
crud.select(connection, {select: string, where: object, innerJoin: object}, callback, debugMode );
```
### Options:
- connection[required]:
The connection object that provides your sql module (mysql, mssql, etc)
- select [Required]: 
A string that contains the elements that you want to select.
In example:
``select: '*'`` or ``select: 'name, lastname'``
- where [optional]:
An object with the values you want to filter. Momentarily `and`, `or` options are not supported.
In example:
``where: {id:2}``
- innerJoin [optional]
An Object that contains the next following properties:
```
{
table: String, 
_table:String, 
field: String or Number
}
```
In example: 
``innerJoin: {table: 'users1', _table: 'users2', field: 'id'}``    
will generate ``INNER JOIN users2 ON users1.id = users2.id;`` within the query.

# Last Updates    
- ``03-31-2017`` Now you can use {select, where, innerJoin clauses} within a select Query!    
