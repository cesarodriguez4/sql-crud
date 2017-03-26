module.exports = function(con, res, table) {
	var query = "SELECT * FROM `"+table+ "` WHERE 1";
	con.query(query, function(err, row) {
		if (err) {
			res.send(err);
		} else {
			res.send(row);
		}
	});
}
