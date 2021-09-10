const mongoose = require('mongoose');
const Abrigo= require('../models/abrigo');

const getAll = async (req, res) => {
    const abrigos = await Abrigo.find()
    res.status(200).json(abrigos)
};

const getByEndereco = async (req, res) => {
   const abrigo = await Abrigo.find({endereco:{ $regex: '.*' + req.query.endereco.toLowerCase() + '.*' }})
    res.status(200).json(abrigo)
};
const getById = async (req, res) => {
    const abrigo = await Abrigo.findById(req.params.id)
    res.status(200).json(abrigo)
};
const  createAbrigo = async (req, res) => {
    const abrigo = new Abrigo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        endereco: req.body.endereco,
        fone: req.body.fone,
        email: req.body.email,
        criadoEm: req.body.criadoEm,
    })
    const abrigoJaExiste = await Abrigo.findOne({nome: req.body.nome})
    if (abrigoJaExiste) {
      return res.status(409).json({error: "Abrigo ja cadastrado."})
    }
    try{
      const novoAbrigo = await abrigo.save()
      res.status(201).json(novoAbrigo)
    } catch(error) {
      res.status(400).json({ message: error.message})
    }
};
const updateAbrigo = async (req, res) => {
    try {
      const abrigo = await Abrigo.findById(req.params.id);
      if (abrigo == null)
        return res.status(404).json({ message: "Abrigo não encontrado." });
  
      for (var prop in req.body) {
        if (prop == "nome") {
          abrigo.nome = req.body[prop];
        } else if (prop == "endereco") {
          abrigo.endereco = req.body[prop];
        } else if (prop == "fone") {
          abrigo.fone = req.body[prop];
        } else if (prop == "email") {
          abrigo.email = req.body[prop];
        } 
      }
     
      const abrigoAtualizado = await abrigo.save();
      res.status(200).json(abrigoAtualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


const deleteById = async (req, res) => {
    const abrigo = await Abrigo.findById(req.params.id)
        if(abrigo == null){
            return res.status(404).json({message: "Abrigo não encontrado."})
        }
        try{
            await abrigo.remove()
            res.status(200).json({ message: "Abrigo excluído com sucesso." })
        } catch (error){
            res.status(500).json({ message: error.message})
        }
};


module.exports = {
    getAll,
    getById,
    getByEndereco,
    createAbrigo,
    updateAbrigo,
    deleteById
}