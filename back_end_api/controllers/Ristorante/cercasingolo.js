const Ristorante = require("../../models/Ristorante")

module.exports = async (req, res) => {
    try {
        let risultato = await Ristorante.findById(req.params.id)

        res.json({
            status: 'success',
            data: risultato
        })
    } catch (error) {
        res.json({
            status: 'error',
            data: error
        })
    }
}