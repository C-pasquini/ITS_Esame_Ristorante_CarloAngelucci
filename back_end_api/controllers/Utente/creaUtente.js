const Utente = require("../../models/Utente")

module.exports = async (req,res) => {
    try {
        let risultato = await Utente.create({
            nome: req.body.nome,
            cognome: req.body.cognome,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            status: req.body.status
        })
        res.json({
            status:"success",
            data:""
        })
    } catch (error) {
        res.json({
            status:"error",
            data:error
        })
    }
}