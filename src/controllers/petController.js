const mongoose = require("mongoose");
const Pet = require("../models/pet");

const getAll = async (req, res) => {
  const pets = await Pet.find().populate("abrigo");
  res.status(200).json(pets);
};

const getPetByParameter = async (req, res) => {
  let consulta = {};
  for (var prop in req.query) {
    if (prop == "sexo") {
      consulta.sexo = { $regex: ".*" + req.query[prop].toLowerCase() + ".*" };
    } else if (prop == "especie") {
      consulta.especie = {
        $regex: ".*" + req.query[prop].toLowerCase() + ".*",
      };
    } else if (prop == "idade") {
      consulta.idade = { $regex: ".*" + req.query[prop].toLowerCase() + ".*" };
    } else if (prop == "castracao") {
      consulta.castracao = req.query[prop];
    }
  }
  const pets = await Pet.find(consulta);
  res.status(200).json(pets);
};
const getById = async (req, res) => {
  const pet = await Pet.findById(req.params.id).populate("abrigo");
  res.status(200).json(pet);
};
const getAllPetByAbrigo = async (req, res) => {
  try {
    const pets = await Pet.find().populate("abrigo");
    const filterpets = pets.filter((pet) => pet.abrigo._id == req.body.abrigo);

    if (filterpets.length == 0) {
      return res.status(409).json({ error: "Nenhum animal encontrado." });
    }

    return res.status(200).json(filterpets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createPet = async (req, res) => {
  const pet = new Pet({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    especie: req.body.especie,
    idade: req.body.idade,
    sexo: req.body.sexo,
    castracao: req.body.castracao,
    abrigo: req.body.abrigo,
    criadoEm: req.body.criadoEm,
  });
  const petJaExiste = await Pet.findOne({ nome: req.body.nome });
  if (petJaExiste) {
    return res.status(409).json({ error: "Animal já cadastrado." });
  }
  try {
    const novoPet = await pet.save();
    res.status(201).json(novoPet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (pet == null)
      return res.status(404).json({ message: "Animal não encontrado." });

    for (var prop in req.body) {
      if (prop == "nome") {
        pet.nome = req.body[prop];
      } else if (prop == "sexo") {
        pet.sexo = req.body[prop];
      } else if (prop == "especie") {
        pet.especie = req.body[prop];
      } else if (prop == "idade") {
        pet.idade = req.body[prop];
      } else if (prop == "castracao") {
        pet.castracao = req.body[prop];
      }else if (prop == "abrigo") {
        pet.abrigo = req.body[prop];
      }
    }
   
    const petAtualizado = await pet.save();
    res.status(200).json(petAtualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteById = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (pet == null) {
    return res.status(404).json({ message: "Animal não encontrado." });
  }
  try {
    await pet.remove();
    res
      .status(200)
      .json({ message: "Cadastro do animal excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getPetByParameter,
  getById,
  getAllPetByAbrigo,
  createPet,
  updatePet,
  deleteById,
};
