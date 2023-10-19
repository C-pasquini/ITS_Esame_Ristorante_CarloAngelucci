const Utente = require("../../models/Utente")

module.exports = async (req, res) => {
    try {
        let credenziali = await Utente.find({
            email: req.body.email,
            password: req.body.password
        })

        if(credenziali == null)
        {
            res.json({
                status:404,
                data:"Not Found"
            })
        } else {
            res.json({
                status:"success",
                data:""
            })
        }
    } catch (error) {
        res.json({
            status:"error",
            data:error
        })
    }
}