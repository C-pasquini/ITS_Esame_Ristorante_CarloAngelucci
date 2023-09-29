const Ristorante = require("../../models/Ristorante")

module.exports = async (req, res) => {
    try {
        let risultato = await Ristorante.create({
            nome: req.body.nome,
            indirizzo: req.body.indirizzo,
            tipoCucina: req.body.tipoCucina
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