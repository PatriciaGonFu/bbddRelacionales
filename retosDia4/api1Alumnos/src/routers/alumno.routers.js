const {Router} = require ("express")
const router = Router();
const alumnosCtrl = require("../controller/alumno.controller")

router.get("/", alumnosCtrl.getStart);

router.get("/alumno/:id", alumnosCtrl.getAlumnoPorId);

router.get("/alumno", alumnosCtrl.getAlumnos);

router.post("/alumno", alumnosCtrl.postAlumnos);

router.put("/alumno", alumnosCtrl.putAlumnos);

router.delete("/alumno", alumnosCtrl.deleteAlumno);




module.exports = router;