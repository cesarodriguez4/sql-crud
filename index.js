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
			let error = "error";
			response = new Error({error: "No selected"});
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