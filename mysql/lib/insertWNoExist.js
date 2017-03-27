module.exports = function (res,con, obj, table, table2, field, value, async) {

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
	str += ' SELECT * FROM (SELECT ';
	for ( i = 0 ; i < keys.length; i ++ ) {
		if(i !== keys.length - 1) {
			str+="'"+obj[keys[i]]+"' as ";
			str+= "`" + keys[i] + "` ";
			str+= ',';
		} else {
			str+="'"+obj[keys[i]]+"' as ";
			str+= "`" + keys[i] + "` ";
		}
	}
	str+=") i WHERE NOT EXISTS ( SELECT * FROM ";
	str+= "`"+table2+"`";
	str+= " WHERE `" + field + "` = " + con.escape(value) + ")";
	con.query(str, function(error, rows, field) {
		async(error, rows, field); 
	});
}