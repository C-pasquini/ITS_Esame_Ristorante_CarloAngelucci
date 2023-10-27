const Utente = require("../../models/Utente")

module.exports = async (req, res) => {
    try {
        try{
            let credenziali = await Utente.findOne({
                email: req.body.email,
                password: req.body.password,
                status: true
            })
            res.json({
                status:"success",
                data:credenziali._id
            })
        }catch(errore){
            res.json({
                status:"404",
                data:"Not Found"
            })
        }
    } catch (error) {
        res.json({
            status:"error",
            data:error
        })
    }
}