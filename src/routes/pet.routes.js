const express = require("express");
const router = express.Router();
const controller = require("../controllers/petController");

router.get("/", controller.getAll)
router.get("/busca", controller.getByQueryParameter)
router.get("/:id", controller.getById)

router.post("/", controller.createPet)

// router.patch("/nome/:id", controller.updateNome)
// router.patch("/especie/:id", controller.updateEspecie)
// router.patch("/idade/:id", controller.updateIdade)
// router.patch("/sexo/:id", controller.updateSexo)
// router.patch("/castracao/:id", controller.updateCastração)
// router.patch("/abrigo/:id", controller.updateAbrigo)

// router.delete("/:id", controller.deleteById)


module.exports = router