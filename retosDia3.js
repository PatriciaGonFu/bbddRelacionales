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


//         try {
//             const sql = `
//               SELECT first_name, last_name, title 
//               FROM students 
//               JOIN marks ON students.student_id = marks.student_id 
//               JOIN subjects ON marks.subject_id = subjects.subject_id
//             `;
        
//             const [result] = await connection.query(sql);
//             console.log(result);
//             await connection.end();

//           } catch (error) {
//             console.error('Error:', error);
//           }
//     } catch (error) {
//         console.error('Error al conectar a la base de datos:', error);
//     }
// }


// try {
//     const sql = `
//         SELECT teachers.first_name AS profe_nombre, 
//         teachers.last_name AS profe_apellidos, 
//         subjects.title AS asignatura 
//         FROM teachers 
//         JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id 
//         JOIN subjects ON subject_teacher.subject_id = subjects.subject_id
//     `;

//     const [result] = await connection.query(sql);
//     console.log(result);
    
// } catch (error) {
//     console.error('Error al ejecutar la consulta:', error);
// } finally {
//     await connection.end();
// }
// } catch (error) {
// console.error('Error al conectar a la base de datos:', error);
// }
// }

try{
    const sql = `
    SELECT subjects.title AS asignatura,
    teachers.first_name AS profe_nombre,
    teachers.last_name AS profe_apellidos,
    COUNT(*) AS total_alumnos
    FROM students
    JOIN grupos ON students.group_id = grupos.group_id
    JOIN subject_teacher ON grupos.group_id = subject_teacher.group_id
    JOIN subjects ON subject_teacher.subject_id = subjects.subject_id
    JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id
    GROUP BY subjects.title, teachers.first_name, teachers.last_name;
    `;

    const [result] = await connection.query(sql);
    console.log(result);
} catch (error) {
    console.error('Error al ejecutar la consulta:', error);
} finally {
    await connection.end();
}
}catch (error){
    console.error('Error al conectar a la base de datos:', error);
}
}



main();










        
        