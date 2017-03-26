const mysql = require('./mysql');
const mssql = require('./mssql');

function sqlCrud(obj) {
	var response;
	if (typeof obj === 'object') {
		if (obj.mode == 'mysql') {
			response = mysql;
		} else if (obj.mode == 'mssql') {
			response = mssql;
		} else {
			let error = New Error({error: 'You must to chosen a database mode'});
			response = error;
		}
	} else if (typeof obj === 'string') {
		if (obj === 'mysql') {
			response = mysql;
		} else if (obj === 'mssql') {
			response = mssql;
		}
	}
	return response;
}

module.exports = sqlCrud;