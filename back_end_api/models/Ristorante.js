const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RistoranteSchema = new Schema({
    nome: {type: String, required: true},
    indirizzo: {type: String, required: true},
    tipoCucina: {type: String}
})

const Ristorante = mongoose.model('Ristorante', RistoranteSchema);
module.exports = Ristorante;