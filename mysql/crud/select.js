module.exports = function(con, options, async) {
	var q = "SELECT * from "+table;

	/*
	@options: 
		select: 'a, b, c' or [{prop: 'documentos', as: 'd'}]
		from: string
		where: object {id: 'id'}
		cond: object {type: 'or', id: 'id'}, 
		group: string, 
		having : object, 
		order: object, 
		limit: object, 
		innerJoin: object
	*/
	var table = options.from;
	
	if (!table) {
		console.log(new Error("You must define a table for your query."));
	} else {

	}

	con.query(q, function(error, rows, fields) {
		return async(error, rows, fields);
	});
}