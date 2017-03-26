var connection = require('node-mysql');
var query = "SELECT * FROM table WHERE table.id = 2";
	connection.query(query, function(error, rows) {
		if (error) {
			console.log('error')
		} else {
			console.log(rows);
		}
	});



const queries = require('db-crud');

var crud = new queries({type: 'mysql'});

crud.select('table', 'id', 2);
