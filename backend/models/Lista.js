const mongoose = require('mongoose')

//const Schema = mongoose.Schema
const {Schema} = mongoose

const listaSchema = new Schema({
    nome:{
        type:String,
        required:true
    },
    nascimento:{
        type:Date,
        default:Date.now
    },
    ativo:{
        type:Boolean,
        default:true
    }
})


module.exports = mongoose.model('lista', listaSchema)