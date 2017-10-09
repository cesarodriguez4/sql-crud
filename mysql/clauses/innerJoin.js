//INNER JOIN table2 ON table1.column_name = table2.column_name;
//INNER JOIN \`PERMISOS\` ON \`ADMINISTRADORES\`.id_permisos = \`PERMISOS\`.id
// innerJoin: { table: 'PERMISOS', on: 'ADMINISTRADORES.id_permisos = PERMISOS.id' }
module.exports = (obj) => {
  const table = obj.table;
  const on = obj.on;
  if (obj.table && obj.on) {
  	return `INNER JOIN \`${table}\ ON ${on}`;
  }
  return new Error("You must select a table or ON clause");
}