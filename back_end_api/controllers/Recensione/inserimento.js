const Recensione = require("../../models/Recensione")
const Utente = require("../../models/Utente")
const AuthVerify = require("../../AuthCode")

module.exports = async (req, res) => {
    try {
        try {
            //console.log(req.headers.authorization)
            let User = await AuthVerify(req)
            //console.log(req)
            console.log(User)
            if (User != null || User != undefined){
                let risultato = await Recensione.create({
                    ristoranteId: req.body.ristoranteId,
                    autore: User.username,
                    testo: req.body.testo,
                    voto: req.body.voto,
                    mediaVoti: req.body.mediaVoti
                });
    
                res.json({
                    status: "success",
                    data: ""
                })
            }

            /*let risultato = await Recensione.create({
                ristoranteId: req.body.ristoranteId,
                autore: User.username,
                testo: req.body.testo,
                voto: req.body.voto,
                mediaVoti: req.body.mediaVoti
            });

            res.json({
                status: "success",
                data: ""
            })*/

            /*res.json({
                status:"unknown",
                data:""
            })*/
        } catch (error) {
            res.json({
                status:"Error",
                data:"User Not Authorized"
            })
            console.log(`Error ${error}`)
        }
    } catch (error) {
        console.log(error)
        console.log(res)
        res.json({
            status: "error",
            data: error
        })
    }
}