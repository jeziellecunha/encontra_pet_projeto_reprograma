const express = require("express");
const router = express.Router();
const controller = require("../controllers/petController");

router.get("/", controller.getAll)
router.get("/busca", controller.getPetByParameter)
router.get("/abrigo", controller.getAllPetByAbrigo)
router.get("/:id", controller.getById)


router.post("/", controller.createPet)

router.patch("/:id", controller.updatePet)

router.delete("/:id", controller.deleteById)


module.exports = router