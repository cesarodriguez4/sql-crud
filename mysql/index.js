const select = require('./crud/select');
const insert = require('./crud/insert');
const update = require('./crud/update');
const Delete = require('./crud/delete');

module.exports = {
	select,
	insert, 
	update, 
	delete : Delete
};