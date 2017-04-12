module.exports = function(obj) {
	var string = '';
	if (obj) {
		var keys = Object.keys(obj);
		string = ' WHERE ';
		for (i=0; i<keys.length; i++) {
			if(i !== keys.length - 1) {
				string += "`"+keys[i]+"` = '"+ obj[keys[i]] + "'";
				string+= ',';
			} else {
				string += "`"+keys[i]+"` = '"+ obj[keys[i]] + "' ";
			}
		}
	}
	return string;
}