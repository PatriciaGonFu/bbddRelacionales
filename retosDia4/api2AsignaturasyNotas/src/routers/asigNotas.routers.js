const {Router} = require ("express")
const router = Router();
const asigNotasCtrl = require("../controller/asigNotas.controller")

router.get("/", asigNotasCtrl.getStart);

router.get("/alumno/media/:id", asigNotasCtrl.getMedia);

router.get("/alumno/apuntadas/:id", asigNotasCtrl.getApuntadasPorId);

router.get("/alumno/apuntadas", asigNotasCtrl.getApuntadas);

router.get("/alumno/impartidas/:id", asigNotasCtrl.getImpartidasPorId);

router.get("/alumno/impartidas", asigNotasCtrl.getImpartidas);

module.exports = router;
