const mongoose = require('mongoose');
const Admin= require('../models/admin');

const getAll = async (req, res) => {
    const admin = await Admin.find().populate('abrigo')
    res.status(200).json(admin)
}
const getById = async (req, res) => {
    const admin = await Admin.findById(req.params.id).populate('abrigo')
    res.status(200).json(admin)
} 

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
      const novoAdmin = admin.save()
      res.status(201).json(novoAdmin)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
}

module.exports = {
    getAll,
    getById,
    createAdmin,
    // updateNome,
    // updateEndereco,
    // updateFone,
    // updateEmail,
    // deleteById
}