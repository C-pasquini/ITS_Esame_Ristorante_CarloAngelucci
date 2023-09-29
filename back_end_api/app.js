const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();  

const app = express();
app.use(cors())                     //Enable external access
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGOSTRING, {useNewUrlPrse: true}, () => {
    console.log("Sono connesso al Database con successo!");
})

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Sono in ascolto sulla porta ${process.env.PORT}`)
})

//----------------- ROTTE API ------------------------

const inserimentoRist = require("./controllers/Ristorante/inserimento");
const cercatuttiRist = require("./controllers/Ristorante/cercatutti");
const cercasingoloRist = require("./controllers/Ristorante/cercasingolo");

app.post("/api/ristorante", inserimentoRist)
app.get("/api/ristorante", cercatuttiRist)
app.get("/api/ristorante/:id", cercasingoloRist)