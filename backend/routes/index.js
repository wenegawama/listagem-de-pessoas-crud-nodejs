const router = require('express').Router()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL_CONNECT, () => {
    console.log('connectou ao mongoDB')
})

const lista = require('./listaDePessoas')



router.get('/', (req, res) => {
    res.json({
        sucess:false,
        message:"Página não encontrada:reservado para o servidor.Favor tente um outro URL."
    })
})

router.use('/lista', lista)

module.exports = router