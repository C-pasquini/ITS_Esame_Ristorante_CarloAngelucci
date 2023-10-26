const Utente = require("./models/Utente")

module.exports = (request) => {
    let b64_code = request.headers.authorization.split(" ")
    let ascii_code = atob(b64_code[1]).split(":")
    console.log(this.ascii_code[0])
    console.log(this.ascii_code[1])
    let auth = async (req, res) => {
        try {
            console.log(this.ascii_code[0])
            console.log(this.ascii_code[1])
            let user = await Utente.findOne({
                email:ascii_code[0],
                password:ascii_code[1]
            })
            try {
                if(user != null){
                    
                    console.log(user)
                    return user
                }
                res.json({
                    status:"",
                    data:""
                })
            } catch (error) {
                res.json({
                    status:"",
                    data:""
                })
            }
        } catch (error) {
            res.json({
                status:"",
                data:""
            })
            return null
        }
    }
    //console.log(auth)
    let user = auth(null, null)
    return user
}


/*module.exports = async (req, res) => {
    try {
        let b64_code = req.headers.authorization.split(" ")
        let ascii_code = atob(b64_code[1]).split(":")
        let user = await Utente.findOne({
            email:ascii_code[0],
            password:ascii_code[1]
        })
        res.json({
            status:"",
            data:""
        })
        return user
    } catch (error) {
        res.json({
            status:"",
            data:""
        })
        return null
    }
}
*/

/*module.exports = async (req, res) => {
    try {
        let basic_b64 = req.split(" ")
        let un_pw = atob(basic_b64[1])
        let un_pw_split = un_pw.split(":")
        un = un_pw_split[0]
        console.log(un)
        pw = un_pw_split[1]
        console.log(pw)
        console.log(res)
        let user = await Utente.findOne({
            email:un,
            password:pw,
            status:true
        })
        console.log(user)
        res.json({
            status:"success",
            data:user
        }) 
    } catch (error) {
        res.json({
            status:"error",
            data:error
        })
        console.log(error)
    }
}*/