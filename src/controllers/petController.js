const mongoose = require('mongoose');
const Pet = require('../models/pet');

const getAll = async (req, res) => {
    const pets = await Pet.find().populate('abrigo')
    res.status(200).json(pets)
}
//to do: consertar buscar abrigo para buscar por qualquer parâmetro
const getByQueryParameter = async (req, res) => {
    console.log(req.query);
   const pets = await Pet.find({nome:{ $regex: '.*' + req.query.nome + '.*' }})
    res.status(200).json(pets)
}
const getById = async (req, res) => {
    const pet = await Pet.findById(req.params.id).populate('abrigo')
    res.status(200).json(pet)
} 
const  createPet = async (req, res) => {
    const pet = new Pet({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        especie: req.body.especie,
        idade: req.body.idade,
        sexo: req.body.sexo,
        castracao: req.body.castracao,
        abrigo: req.body.abrigo,
        criadoEm: req.body.criadoEm,
    })
    const petJaExiste = await Pet.findOne({nome: req.body.nome})
    if (petJaExiste) {
      return res.status(409).json({error: "Animal já cadastrado."})
    }
    try{
      const novoPet = await pet.save()
      res.status(201).json(novoPet)
    } catch(error) {
      res.status(400).json({ message: error.message})
    }
}
const updateNome = async (req, res) => {
  try{
      const pet = await Pet.findById(req.params.id)
      if(pet == null){
          return res.status(404).json({message: "Animal não encontrado."})
      }
      if(req.body.nome != null){
          pet.nome = req.body.nome
      }
      const petAtualizado = await pet.save()
      res.status(200).json(petAtualizado)
  }catch (error){
      res.status(500).json({ message: error.message})
  }
}
const updateEspecie = async (req, res) => {
  try{
      const pet = await Pet.findById(req.params.id)
      if(pet == null){
          return res.status(404).json({message: "Animal não encontrado."})
      }
      if(req.body.especie != null){
          pet.especie = req.body.especie
      }
      const petAtualizado = await pet.save()
      res.status(200).json(petAtualizado)
  }catch (error){
      res.status(500).json({ message: error.message})
  }
}
const updateIdade = async (req, res) => {
  try{
      const pet = await Pet.findById(req.params.id)
      if(pet == null){
          return res.status(404).json({message: "Animal não encontrado."})
      }
      if(req.body.idade != null){
          pet.idade = req.body.idade
      }
      const petAtualizado = await pet.save()
      res.status(200).json(petAtualizado)
  }catch (error){
      res.status(500).json({ message: error.message})
  }
}
// const updateSexo = async (req, res) => {
//   try{
//       const admin = await Admin.findById(req.params.id)
//       if(admin == null){
//           return res.status(404).json({message: "Administrador não encontrado."})
//       }
//       if(req.body.sexo != null){
//           admin.sexo = req.body.sexo
//       }
//       const adminAtualizado = await admin.save()
//       res.status(200).json(adminAtualizado)
//   }catch (error){
//       res.status(500).json({ message: error.message})
//   }
// }
// const updateCastracao = async (req, res) => {
//   try{
//       const admin = await Admin.findById(req.params.id)
//       if(admin == null){
//           return res.status(404).json({message: "Administrador não encontrado."})
//       }
//       if(req.body.castracao != null){
//           admin.castracao = req.body.castracao
//       }
//       const adminAtualizado = await admin.save()
//       res.status(200).json(adminAtualizado)
//   }catch (error){
//       res.status(500).json({ message: error.message})
//   }
// }
// const deleteById = async (req, res) => {
//   const admin = await Admin.findById(req.params.id)
//       if(admin == null){
//           return res.status(404).json({message: "Administrador não encontrado."})
//       }
//       try{
//           await admin.remove()
//           res.status(200).json({ message: "Administrador excluído com sucesso." })
//       } catch (error){
//           res.status(500).json({ message: error.message})
//       }
// }

module.exports = {
    getAll,
    getByQueryParameter,
    getById,
    createPet,
    updateNome,
    updateEspecie,
    updateIdade,
    // updateSexo,
    // updateCastracao,
    // updateAbrigo,
    // deleteById
}