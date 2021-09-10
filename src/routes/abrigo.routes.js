const express = require("express");
const router = express.Router();
const controller = require("../controllers/abrigoController");

router.get("/inicio", (req, resp)=>{
    resp.status(200).send({"mensagem":"Bem-vinda à API Encontra Pet e encontre seu melhor amigo."})
})


router.get("/", controller.getAll)
router.get("/busca", controller.getByEndereco)
router.get("/:id", controller.getById)

router.post("/", controller.createAbrigo)

router.patch("/nome/:id", controller.updateNome)
router.patch("/endereco/:id", controller.updateEndereco)
router.patch("/fone/:id", controller.updateFone)
router.patch("/email/:id", controller.updateEmail)


router.delete("/:id", controller.deleteById)


module.exports = router