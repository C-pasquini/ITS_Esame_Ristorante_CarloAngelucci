const Recensione = require("../../models/Recensione")

module.exports = async (req, res) => {
    try {
        let risultato = await Recensione.create({
            ristoranteId: req.body.ristoranteId,
            autore: req.body.autore,
            testo: req.body.testo,
            voto: req.body.voto,
            mediaVoti: req.body.mediaVoti
        });

        res.json({
            status: "success",
            data: ""
        })
    } catch (error) {
        res.json({
            status: "error",
            data: error
        })
    }
}