const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RecensioneSchema = new Schema({
    ristoranteId: [{type: Schema.Types.ObjectId, ref: 'Ristorante'}],
    autore: {type: String, required: true},
    testo: {type: String, maxLength: 500, required: true},
    voto: {type: Number, min: 1, max:5},
    mediaVoti: {type: Number}
})

const Recensione = mongoose.model('Recensione', RecensioneSchema);
module.exports = Recensione;