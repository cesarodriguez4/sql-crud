//INNER JOIN table2 ON table1.column_name = table2.column_name;
module.exports = function(obj) {
	var table = obj.table;
	var _table = obj._table;
	var field = obj.field;
	var string = ' INNER JOIN '; 
	if(table && _table && field) {
		string += _table + ' ON ';
		string += table + '.' + field;
		string += " = " + _table + '.'+ field + ' ';
	return string;
	}
	return new Error("You must provide the fields for inner Join");
}