const express = require("express")
const mongoose = requite("mongoose")
require("dotenv").config()

const pokemonRoutes = require("./routes/pokemon")

const app = express()
const port = 3000

app.set("port", port)

//Rutas
app.get ("/", (req,res)=>{
    res.send ("Hola entrenador")

})

app.use("/api/v1/pokemon",pokemonRoutes)



mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("conect to DB")})
.catch((err)=>console.error(err.message))
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})