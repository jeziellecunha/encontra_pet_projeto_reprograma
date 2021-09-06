const mongoose = require('mongoose');
const Admin= require('../models/admin');

const getAll = async (req, res) => {
    const allAdmin = await Admin.find().populate('abrigo')
    res.status(200).json(allAdmin)
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
      const novoAdmin = await admin.save()
      res.status(201).json(novoAdmin)
    } catch(error) {
      res.status(400).json({ message: error.message})
    }
}
const updateNome = async (req, res) => {
  try{
      const admin = await Admin.findById(req.params.id)
      if(admin == null){
          return res.status(404).json({message: "Administrador não encontrado."})
      }
      if(req.body.nome != null){
          admin.nome = req.body.nome
      }
      const adminAtualizado = await admin.save()
      res.status(200).json(adminAtualizado)
  }catch (error){
      res.status(500).json({ message: error.message})
  }
}
const updateEndereco = async (req, res) => {
  try{
      const admin = await Admin.findById(req.params.id)
      if(admin == null){
          return res.status(404).json({message: "Administrador não encontrado."})
      }
      if(req.body.endereco != null){
          admin.endereco = req.body.endereco
      }
      const adminAtualizado = await admin.save()
      res.status(200).json(adminAtualizado)
  }catch (error){
      res.status(500).json({ message: error.message})
  }
}
const updateFone = async (req, res) => {
  try{
      const admin = await Admin.findById(req.params.id)
      if(admin == null){
          return res.status(404).json({message: "Administrador não encontrado."})
      }
      if(req.body.fone != null){
          admin.fone = req.body.fone
      }
      const adminAtualizado = await admin.save()
      res.status(200).json(adminAtualizado)
  }catch (error){
      res.status(500).json({ message: error.message})
  }
}
const updateEmail = async (req, res) => {
  try{
      const admin = await Admin.findById(req.params.id)
      if(admin == null){
          return res.status(404).json({message: "Administrador não encontrado."})
      }
      if(req.body.email != null){
          admin.email = req.body.email
      }
      const adminAtualizado = await admin.save()
      res.status(200).json(adminAtualizado)
  }catch (error){
      res.status(500).json({ message: error.message})
  }
}
const updateAbrigo = async (req, res) => {
    try{
        const admin = await Admin.findById(req.params.id)
        if(admin == null){
            return res.status(404).json({message: "Administrador não encontrado."})
        }
        if(req.body.abrigo != null){
            admin.abrigo = req.body.abrigo
        }
        const adminAtualizado = await admin.save()
        res.status(200).json(adminAtualizado)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}   
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
}

module.exports = {
    getAll,
    getById,
    createAdmin,
    updateNome,
    updateEndereco,
    updateFone,
    updateEmail,
    updateAbrigo,
    deleteById
}