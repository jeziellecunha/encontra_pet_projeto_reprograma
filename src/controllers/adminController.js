const mongoose = require('mongoose');
const Admin= require('../models/admin');

const getAll = async (req, res) => {
    const allAdmin = await Admin.find().populate('abrigo')
    res.status(200).json(allAdmin)
};
const getById = async (req, res) => {
    const admin = await Admin.findById(req.params.id).populate('abrigo')
    res.status(200).json(admin)
}; 
const  createAdmin = async (req, res) => {
    const admin = new Admin({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        endereco: req.body.endereco,
        fone: req.body.fone,
        email: req.body.email,
        abrigo: req.body.abrigo,
        criadoEm: req.body.criadoEm,
    })
    const adminJaExiste = await Admin.findOne({nome: req.body.nome})
    if (adminJaExiste) {
      return res.status(409).json({error: "Administrador já cadastrado."})
    }
    try{
      const novoAdmin = await admin.save()
      res.status(201).json(novoAdmin)
    } catch(error) {
      res.status(400).json({ message: error.message})
    }
};
const updateAdmin = async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id);
      if (admin == null)
        return res.status(404).json({ message: "administrador não encontrado." });
  
      for (var prop in req.body) {
        if (prop == "nome") {
          admin.nome = req.body[prop];
        } else if (prop == "endereco") {
          admin.endereco = req.body[prop];
        } else if (prop == "fone") {
          admin.fone = req.body[prop];
        } else if (prop == "email") {
          admin.email = req.body[prop];
        } else if (prop == "abrigo") {
            admin.abrigo = req.body[prop];
          } 
      }
     
      const adminAtualizado = await admin.save();
      res.status(200).json(adminAtualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const deleteById = async (req, res) => {
  const admin = await Admin.findById(req.params.id)
      if(admin == null){
          return res.status(404).json({message: "Administrador não encontrado."})
      }
      try{
          await admin.remove()
          res.status(200).json({ message: "Administrador excluído com sucesso." })
      } catch (error){
          res.status(500).json({ message: error.message})
      }
};

module.exports = {
    getAll,
    getById,
    createAdmin,
    updateAdmin,
    deleteById
}