const Recensione = require("../../models/Recensione")
const Utente = require("../../models/Utente")
const AuthVerify = require("../../AuthCode")

module.exports = async (req, res) => {
    try {
        try {
            //let User = AuthVerify(req.headers.authorization)
            
            /*if (true){
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
            }*/

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

            /*res.json({
                status:"unknown",
                data:""
            })*/
        } catch (error) {
            res.json({
                status:"Error",
                data:"User Not Authorized"
            })
        }
    } catch (error) {
        res.json({
            status: "error",
            data: error
        })
    }
}