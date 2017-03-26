module.exports = function(con, table) {
	con.query("SELECT * from "+table+" WHERE 1", function(error, rows) {
		if (error) {
			console.log(error);
		} else {
			console.log(rows);
		}
	});
}