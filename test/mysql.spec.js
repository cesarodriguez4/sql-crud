var chai = require("chai");
var mysql = require('mysql');
var sql = require('../index');


var connection = mysql.createConnection({
  host     : 'gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'ekk1j4ep3qnun9wm',
  password : 'a8mojldmf0cbr8i6',
  database : 'w7yh7cpln9w2enpc'
});

describe('mysql-test', function() {
	describe('selectAll', function() {
		it('should return a collection of results', function(done) {
			var mysql = new sql("mysql");
			mysql.select(connection,'users', function(error, result, fields) {
				console.log(result);
				done();
			});
		});
	});

	describe('insert', function() {
		it('should insert a single row into the table users', function(done) {
			done();
		});
	});



});

