const express = require("express");
const router = express.Router();
const controller = require("../controllers/tutorController");

router.get("/", controller.getAll)
router.get("/:id", controller.getById)

router.post("/", controller.createTutor)

router.patch("/:id", controller.updateTutor)

router.delete("/:id", controller.deleteById)


module.exports = router