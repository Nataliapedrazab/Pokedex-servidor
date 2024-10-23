const pokemon = require("../models/pokemon")
const pokemon = require(`../models/pokemon`)

exports.saludoEntrenador = async (req,res)=>{
    try {
        res.send("Hola entrenador ahora desde el controlador")
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.create = async (req,res)=>{
 try {
    const pokemon = new pokemon
    await pokemon.save()
    res.status(201).json(pokemon)
 } catch (error) {
    res.status(500).json({error:error.message})
 }   
}