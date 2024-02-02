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

    // let notaMedia = "SELECT AVG(mark) AS nota_media FROM marks WHERE subject_id = 1"
    // const [result] = await connection.query(notaMedia);
    // console.log(result);

    //     await connection.end();
    // }
    // catch (error) {
    // console.error('Error:', error);
    // }

      let totalAlumnos = "SELECT COUNT (*) from students"
      const [result] = await connection.query(totalAlumnos);
      console.log(result);

      await connection.end();
    }
    catch(error){
      console.error('Error:', error);
    }

    // let eliminarNotas = "DELETE FROM marks WHERE mark > 5 AND YEAR(date) = 2023"
    // const [result] = await connection.query(eliminarNotas);
    // console.log(result);
    // console.log('Notas eliminadas');

    // await connection.end();
    //   }
    //   catch(error){
    //     console.error('Error:', error);
    //   }

    // let matriculados = "SELECT * FROM students WHERE income_year = 2023"
    // const [result] = await connection.query(matriculados);
    // console.log(result);

    // await connection.end();
    //   }
    //   catch(error){
    //     console.error('Error:', error);
    //   }

    // let profesores = "SELECT subject_id, COUNT(teacher_id) AS num_teachers FROM subject_teacher GROUP BY subject_id "
    // const[result] = await connection.query(profesores);
    // console.log(result);

    // await connection.end();
    //   }
    //   catch(error){
    //     console.error('Error:', error);
    //   }

    // let idYnota = "SELECT student_ID, mark FROM marks WHERE (student_ID BETWEEN 1 and 20) OR (mark>38 AND YEAR(date)) = 2023"
    // const[result] = await connection.query(idYnota);
    // console.log(result);

    // await connection.end();
    //   }
    //   catch(error){
    //     console.error('Error:', error);
    //   }

    // let mediaPorAsignatura = "SELECT subject_id, AVG(mark) AS nota_media FROM marks WHERE YEAR(date) = 2024 GROUP BY subject_id"
    // const[result] = await connection.query(mediaPorAsignatura);
    // console.log(result);

    // await connection.end();
    //   }
    //   catch(error){
    //     console.error('Error:', error);
    //   }

      // let mediaPorAlumno = "SELECT student_id, AVG(mark) AS nota_media FROM marks WHERE YEAR(date) = 2024 GROUP BY student_id"
      // const[result] = await connection.query(mediaPorAlumno);
      // console.log(result);
  
      // await connection.end();
      //   }
      //   catch(error){
      //     console.error('Error:', error);
      //   }


}


main();

