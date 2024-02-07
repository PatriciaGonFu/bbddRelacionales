const { request, response } = require("express");
const{pool} = require("../database")

function getStart(request, response)
{
    let respuesta = {error: false, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

async function getMedia (request, response)
{
    try{
    let sql = "SELECT AVG(mark) AS nota_media FROM marks WHERE student_id = ?";
    let [result] = await pool.query(sql, [request.params.id]);

    console.log(result);

    response.send(result);
}
catch(err)
{
    console.log(err);
}
}

async function getApuntadasPorId (request, response)
{
    try{
    let sql = `SELECT subjects.title AS asignatura FROM subjects 
    JOIN marks ON subjects.subject_id = marks.subject_id 
    JOIN students ON marks.student_id = students.student_id 
    WHERE students.student_id = ?`;
    let [result] = await pool.query(sql, [request.params.id]);

    console.log(result);

    response.send(result);
}
catch(err)
{
    console.log(err);
}
}

async function getApuntadas (request, response)
{
    try{
    let sql = `SELECT students.first_name AS nombre_alumno, students.last_name AS apellido_alumno,
    subjects.title AS asignatura
    FROM subjects JOIN marks ON subjects.subject_id = marks.subject_id 
    JOIN students ON marks.student_id = students.student_id
    ORDER BY students.student_id ASC`

    let [result] = await pool.query(sql);

    console.log(result);

    response.send(result);
}
catch(err)
{
    console.log(err);
}
}

async function getImpartidasPorId (request,response)
{
    try{
        let sql = `SELECT subjects.title AS asignatura FROM subjects 
        JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id 
        JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id 
        WHERE teachers.teacher_id = ?`

        let [result] = await pool.query(sql, [request.params.id]);
        console.log(result);
        response.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
}

async function getImpartidas (request, response)
{
    try{
        let sql = `SELECT teachers.first_name AS nombre_profe, teachers.last_name AS apellido_profe,
        subjects.title AS asignatura
        FROM teachers 
        JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id 
        JOIN subjects ON subject_teacher.subject_id = subjects.subject_id
        ORDER BY teachers.teacher_id ASC`

        let [result] = await pool.query(sql);
        console.log(result);
        response.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = {getStart, getMedia, getApuntadasPorId, getApuntadas, getImpartidasPorId, getImpartidas};