const mongoose = require('mongoose');
const Tutor= require('../models/tutor');

const getAll = async (req, res) => {
    const tutores = await Tutor.find()
    res.status(200).json(tutores)
};
const getById = async (req, res) => {
    const tutor = await Tutor.findById(req.params.id)
    res.status(200).json(tutor)
}; 

const  createTutor = async (req, res) => {
    const tutor = new Tutor({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        endereco: req.body.endereco,
        fone: req.body.fone,
        email: req.body.email,
        criadoEm: req.body.criadoEm,
    })
    const tutorJaExiste = await Tutor.findOne({nome: req.body.nome})
    if (tutorJaExiste) {
      return res.status(409).json({error: "Tutor já cadastrado."})
    }
    try{
      const novoTutor = await tutor.save()
      res.status(201).json(novoTutor)
    } catch(error) {
      res.status(400).json({ message: error.message})
    }
};
const updateTutor = async (req, res) => {
    try {
      const tutor = await Tutor.findById(req.params.id);
      if (tutor == null)
        return res.status(404).json({ message: "tutor não encontrado." });
  
      for (var prop in req.body) {
        if (prop == "nome") {
          tutor.nome = req.body[prop];
        } else if (prop == "endereco") {
          tutor.endereco = req.body[prop];
        } else if (prop == "fone") {
          tutor.fone = req.body[prop];
        } else if (prop == "email") {
          tutor.email = req.body[prop];
        } 
      }
     
      const tutorAtualizado = await tutor.save();
      res.status(200).json(tutorAtualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const deleteById = async (req, res) => {
  const tutor = await Tutor.findById(req.params.id)
      if(tutor == null){
          return res.status(404).json({message: "Tutor não encontrado."})
      }
      try{
          await tutor.remove()
          res.status(200).json({ message: "Tutor excluído com sucesso." })
      } catch (error){
          res.status(500).json({ message: error.message})
      }
};

module.exports = {
    getAll,
    getById,
    createTutor,
    updateTutor,
    deleteById
}