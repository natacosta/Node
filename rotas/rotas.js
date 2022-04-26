const express = require("express");
const conotroles = require("../controlador/conotroles");
const router = express.Router();
const Controlers = require("../controlador/conotroles")

router.get("/home", conotroles.HOME)
router.get("/:titulo", conotroles.SEARCHTITLE)
router.get ("/all",   Controlers.All)
router.post("/add",  Controlers.ADD)


module.exports = router;