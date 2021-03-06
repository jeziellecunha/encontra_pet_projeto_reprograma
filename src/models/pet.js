const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true,
        lowercase: true
    },
    idade: {
        type: String,
        required: true,
        lowercase: true
    },
    sexo: {
        type: String,
        required: true,
        lowercase: true
    },
    castracao: {
        type: Boolean,
        required: true
    },
    abrigo: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'abrigo'
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('pet', petSchema)