const mongoose = require('mongoose');
const Abrigo= require('../models/abrigo');

const getAll = async (req, res) => {
    const abrigos = await Abrigo.find()
    res.status(200).json(abrigos)
}
const getById = async (req, res) => {
    const abrigo = await Abrigo.findById(req.params.id)
    res.status(200).json(abrigo)
}
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
    } catch(err) {
      res.status(400).json({ message: err.message})
    }
}

const updateNome = async (req, res) => {
    try{
        const abrigo = await Abrigo.findById(req.params.id)
        if(abrigo == null){
            return res.status(404).json({message: "Abrigo não encontrado."})
        }
        if(req.body.nome != null){
            abrigo.nome = req.body.nome
        }
        const abrigoAtualizado = await abrigo.save()
        res.status(200).json(abrigoAtualizado)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
}

const updateEndereco = async (req, res) => {
    try{
        const abrigo = await Abrigo.findById(req.params.id)
        if(abrigo == null){
            return res.status(404).json({message: "Abrigo não encontrado."})
        }
        if(req.body.endereco != null){
            abrigo.endereco = req.body.endereco
        }
        const abrigoAtualizado = await abrigo.save()
        res.status(200).json(abrigoAtualizado)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
}
const updateFone = async (req, res) => {
    try{
        const abrigo = await Abrigo.findById(req.params.id)
        if(abrigo == null){
            return res.status(404).json({message: "Abrigo não encontrado."})
        }
        if(req.body.fone != null){
            abrigo.fone = req.body.fone
        }
        const abrigoAtualizado = await abrigo.save()
        res.status(200).json(abrigoAtualizado)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
}
const updateEmail = async (req, res) => {
    try{
        const abrigo = await Abrigo.findById(req.params.id)
        if(abrigo == null){
            return res.status(404).json({message: "Abrigo não encontrado."})
        }
        if(req.body.email != null){
            abrigo.email = req.body.email
        }
        const abrigoAtualizado = await abrigo.save()
        res.status(200).json(abrigoAtualizado)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
}

const deleteById = async (req, res) => {
    const abrigo = await Abrigo.findById(req.params.id)
        if(abrigo == null){
            return res.status(404).json({message: "Abrigo não encontrado."})
        }
        try{
            await abrigo.remove()
            res.status(200).json({ message: "Abrigo excluído com sucesso." })
        } catch (err){
            res.status(500).json({ message: err.message})
        }
}

module.exports = {
    getAll,
    getById,
    createAbrigo,
    updateNome,
    updateEndereco,
    updateFone,
    updateEmail,
    deleteById
}