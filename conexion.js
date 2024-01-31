const mysql = require('mysql2/promise');

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '14deJulio!',
      database: 'school',
    });

    console.log('Conectado a la base de datos MySQL');

    let add = "ALTER TABLE direccion ADD COLUMN PROVINCIA VARCHAR(50)"
    const [result] = await connection.query(add);
    console.log(result);
    console.log('Columna añadida con éxito');

    await connection.end();

  } catch (error) {
    console.error('Error:', error);
  }

  // let drop = "ALTER TABLE direccion DROP COLUMN PROVINCIA"
  // const [result] = await connection.query(drop);
  // console.log(result);
  // console.log('Columna eliminada');

  //     await connection.end();

  // } catch (error) {
  //   console.error('Error:', error);
  // }


//   let deleteTable = "DROP TABLE direccion"
//   let [result] = await connection.query(deleteTable);
//   console.log(result);
//   console.log('Tabla eliminada');

  //     await connection.end();

  // } catch (error) {
  //   console.error('Error:', error);
  // }

// let updateTable = "UPDATE marks SET mark= 0";
// let [result] = await connection.query(updateTable);
// console.log("Notas actualizadas");
// console.log(result);

//       await connection.end();

//   } catch (error) {
//     console.error('Error:', error);
//   }


// let selectData = "SELECT first_name, last_name FROM students";
// let [result] = await connection.query(selectData);
// console.log("Datos obtenidos");
// console.log(result);

//       await connection.end();

//   } catch (error) {
//     console.error('Error:', error);
//   }

// let selectData2 = "SELECT teacher_id, first_name, last_name FROM teachers";
// let [result] = await connection.query(selectData2);
// console.log("Datos obtenidos");
// console.log(result);
//       await connection.end();

//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

main();

}
