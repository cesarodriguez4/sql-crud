var select = require('./lib/select');
var insert = require('./lib/insert');
var insert = require('./lib/insertWNoExist');
var updateWhere = require('./lib/update');

module.exports = {
	select, 
	insert, 
	insertWNoExist, 
	updateWhere
}