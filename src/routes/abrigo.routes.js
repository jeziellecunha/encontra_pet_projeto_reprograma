const express = require("express");
const router = express.Router();
const controller = require("../controllers/abrigoController");

router.get("/", controller.getAll)
router.get("/:id", controller.getById)

router.post("/", controller.createAbrigo)

router.patch("/nome/:id", controller.updateNome)
router.patch("/endereco/:id", controller.updateEndereco)
router.patch("/fone/:id", controller.updateFone)
router.patch("/email/:id", controller.updateEmail)

router.delete("/:id", controller.deleteById)


module.exports = router