const Ristorante = require("../../models/Ristorante")
const Recensione = require("../../models/Recensione")

module.exports = async (req, res) => {
    try {
        let ristorante = await Ristorante.findById(req.params.id)
        let recensione = await Recensione.find({ ristoranteId: ristorante._id});
        res.json({
            ristorante, recensione
        })
    } catch (error) {
        res.json({
            status: 'error',
            data: error
        })
    }
}