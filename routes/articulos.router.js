const express = require("express");
const router = express.Router();
const articulosController = require("../controllers/articulos.controller");

router.post("/", articulosController.create)
router.get("/", articulosController.find)
router.get("/:id_articulo", articulosController.findOne)
router.put("/:id", articulosController.update)
router.delete("/:id", articulosController.remove)


module.exports = router