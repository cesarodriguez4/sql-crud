module.exports = function(con, table, async ) {
	con.query("SELECT * from "+table+" WHERE 1", function(error, rows, fields) {
		return async(error, rows, fields);
	});
}