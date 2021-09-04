const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    fone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('tutor', tutorSchema)