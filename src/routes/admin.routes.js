const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.get("/", controller.getAll)
router.get("/:id", controller.getById)

router.post("/", controller.createAdmin)

router.patch("/:id", controller.updateAdmin)

router.delete("/:id", controller.deleteById)


module.exports = router