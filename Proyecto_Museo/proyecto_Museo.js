const mysql = require('mysql2/promise');

async function main() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '14deJulio!',
            database: 'museo_ideal',
        });

        console.log('Conectado a la base de datos MySQL');
    
    // try {
    //     const sql = `
    //     SELECT piezas.nombre AS pieza,
    //     piezas.localizacion AS localizacion,
    //     estados.fecha_devolucion AS fin_de_prestamo,
    //     propietarios.nombre AS propietario, propietarios.email AS email_propietario,
    //     propietarios.direccion AS direccion_propietario
    //     FROM piezas
    //     JOIN estados ON piezas.id_pieza = estados.id_pieza
    //     JOIN propietarios ON piezas.id_propietario = propietarios.id_propietario
    //     WHERE estados.estado = 'En prestamo de otros'
    //     `;

    //     const [result] = await connection.query(sql);
    //     console.log(result);
    //     await connection.end();
    // } catch (error){
    //     console.error('Error:', error)
    // }
    
    try {
        const sql = `
        SELECT colecciones.nombre AS colección,
        COUNT(*) AS total_piezas
        FROM piezas
        JOIN colecciones ON piezas.id_coleccion = colecciones.id_coleccion
        GROUP BY piezas.id_coleccion
        ORDER BY total_piezas DESC;
        `;

        const [result] = await connection.query(sql);
        console.log(result);
        await connection.end();
    } catch (error){
        console.error('Error:', error)
    }

    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}
    main();
    