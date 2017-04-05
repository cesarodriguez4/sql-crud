var sqlCrud = require("../../");
var mysql = require("mysql");
var chai = require("chai");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'users'
});

describe("Mysql clauses", () => {
	describe("Select Clause", () => {
		var selectClause = require("../../mysql/clauses/select");
		it("should return => select a,c,b ", () => {
			chai.expect(selectClause('a,b,c')).to.equal("SELECT a,b,c ");
		});
	});
	describe("Where Clause", () => {
		var whereClause = require("../../mysql/clauses/where");
		it("Should return =>  where `a`='foo', `b`='bar' ", () => {
			chai.expect(whereClause({a: 'foo', b: 'bar'}))
			.to.equal(" WHERE `a` = 'foo',`b` = 'bar'");
		});
	});
	describe("from Clause", () => {
		var fromClause = require("../../mysql/clauses/from");
		it("Should return => from `mytable` ", () => {
			chai.expect(fromClause("mytable"))
			.to.equal("FROM `mytable` ");
		});
	});
	describe("innerJoin Clause", () => {
		var innerjoinClause = require("../../mysql/clauses/innerJoin");
		it(" Should return => INNER JOIN table2 ON table1.column_name = table2.column_name", () => {
			chai.expect(innerjoinClause({table: 'table1', _table: 'table2', field: 'column_name'}))
			.to.equal("INNER JOIN table2 ON table1.column_name = table2.column_name");
		});
	});
});