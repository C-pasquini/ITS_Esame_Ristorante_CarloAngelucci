const Utente = require("../../models/Utente")

module.exports = async (req, res) => {
    try {
        console.log(req.headers.data)
        let data = req.headers.data.split(" ")
        console.log(data[0])
        console.log(data[1])
        let risultato = await Utente.findOne({
            email:data[0],
            password:data[1]
        })
        res.json({
            status:"success",
            data:data
        })
    } catch (error) {
        res.json({
            status:"error",
            data:error
        })
    }
}