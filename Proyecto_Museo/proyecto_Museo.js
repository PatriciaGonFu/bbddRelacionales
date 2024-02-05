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
    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}
    main();
    