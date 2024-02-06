const { request, response } = require("express");
const{pool} = require("../database")

function getStart(request, response)
{
    let respuesta = {error: false, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

async function getAlumnoPorId (request, response)
{
    try{
    let sql = "SELECT * FROM students WHERE student_id = ?";
    let [result] = await pool.query(sql, [request.params.id]);

    console.log(result);

    response.send(result);
}
catch(err)
{
    console.log((err));
}
}

async function getAlumnos (request, response)
{
    try{
    let sql = "SELECT * FROM students";
    let [result] = await pool.query(sql);

    console.log(result);

    response.send(result);
}
catch(err)
{
    console.log((err));
}
}

async function postAlumnos(request, response) {
    try {
        const { first_name, last_name, group_id, income_year } = request.body;
        const sql = "INSERT INTO students (first_name, last_name, group_id, income_year) VALUES (?, ?, ?, ?)";
        const [result] = await pool.query(sql, [first_name, last_name, group_id, income_year]);
        response.json({ error: false, id: result.insertId });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


async function putAlumnos (request, response)
{
    try{
        const {student_id, first_name, last_name, group_id, income_year} = request.body;
        console.log('Hasta aquí funciona 1');
        const sql = `
            UPDATE students
            SET first_name = COALESCE(?, first_name),
            last_name = COALESCE(?, last_name),
            group_id = COALESCE (?, group_id),
            income_year = COALESCE (?, income_year)
            WHERE student_id = ?
        `;
        console.log('Hasta aquí funciona 2');
        await pool.query(sql, [student_id, first_name, last_name, group_id, income_year]);
        console.log('Hasta aquí funciona 3');
        response.json({error: false, message: "Alumno actualizado"})
        console.log('Hasta aquí funciona 4');
    } catch (error){
        console.error("Error:", error);
    }
};


async function deleteAlumno (request, response) 
{
    try{
        const {student_id} = request.body;
        const sql = `
        DELETE from students
        WHERE student_id = ?
        `;
        await pool.query(sql, [student_id]);
        response.json({error: false, message: "Alumno eliminado"});
    } catch (error){
        console.error("Error:", error);
    }
};



module.exports = {getStart, getAlumnoPorId, getAlumnos, postAlumnos, putAlumnos, deleteAlumno};