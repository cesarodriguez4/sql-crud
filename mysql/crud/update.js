module.exports = function (con, table, obj, whash, wkey, async) {
	/*
	@options: 
		update, 
		set, 
		where, 
		orderBy,
		limit 
	*/
	var str = "UPDATE `"+ table +"` SET ";	
	var keys = Object.keys(obj);
	for ( i = 0; i<keys.length; i++ ) {
		if(i !== keys.length - 1) {
			str+='`';
			str+= keys[i];
			str+='`';
			str+= " = ";
			str+= "'";
			str += obj[keys[i]];
			str += "'"
			str+= ',';
		} else {
			str+='`';
			str+= keys[i];
			str+='`';
			str+= " = ";
			str+= "'";
			str += obj[keys[i]];
			str += "'"
		}
	}
	str += " WHERE ";
	str += "`" + whash + "`";
	str += " = ";
	str +=  wkey ;
	con.query(str, function(error, row, fields) {
		async(error, row, fields);
	});
}
