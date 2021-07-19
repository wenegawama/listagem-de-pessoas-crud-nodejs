const mongoose = require('mongoose')

//const Schema = mongoose.Schema
const {Schema} = mongoose
const slug = require('slug')

const listaSchema = new Schema({
    nome:{
        type:String,
        required:true,
        unique:true
    },
    slug: {
        type:String, 
        required:true,
        unique:true,
        default: function(){return slug(this.nome)}
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