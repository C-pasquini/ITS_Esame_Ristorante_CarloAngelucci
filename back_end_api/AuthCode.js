const Utente = require("./models/Utente")

module.exports = (request) => {
    //console.log(request.headers.authorization)
    let b64_code = request.headers.authorization.split(" ")
    //console.log(b64_code)
    let ascii_code = atob(b64_code[1])
    let ascii_code_split = ascii_code.split(":")
    //console.log(ascii_code_split[0])
    //console.log(ascii_code_split[1])
    let auth = async (req, res) => {
        try {
            try {
                //console.log(ascii_code_split[0])
                //console.log(ascii_code_split[1])
                let user = await Utente.findOne({
                    email:ascii_code_split[0],
                    password:ascii_code_split[1]
                })
                if(user != null){
                    
                    //console.log(user)
                    return user
                }
                res.json({
                    status:"success",
                    data:user
                })
            } catch (error) {
                //console.log(error)
                //console.log(res)
                res.json({
                    status:"",
                    data:""
                })
                //console.log(res)
            }
        } catch (error) {
            //console.log(error)
            res.json({
                status:"",
                data:""
            })
            //console.log(error)
        }
    }
    //console.log(auth)
    let user = auth(request, null)
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