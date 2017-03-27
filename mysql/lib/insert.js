module.exports = function(con, table, obj, async ) {
	var str = "INSERT INTO `"+ table +"` ( ";	
	var keys = Object.keys(obj);
	for ( i = 0; i<keys.length; i++ ) {
		if(i !== keys.length - 1) {
			str+='`';
			str+= keys[i];
			str+='`';
			str+= ',';
		} else {
			str+='`';
			str+= keys[i];
			str+='`';
		}
	}
	str += ')';
	str += ' VALUES (';
	for ( i = 0 ; i < keys.length; i ++ ) {
		if(i !== keys.length - 1) {
			str+= con.escape(obj[keys[i]]);
			str+= ',';
		} else {
			str+= con.escape(obj[keys[i]]);
		}
	}
	str+= ' )';
	con.query(str, function(error, rows, fields) {
		async(error, rows, fields);
	});
}