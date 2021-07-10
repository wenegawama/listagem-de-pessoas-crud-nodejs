const router = require('express').Router()
const Lista = require('../models/Lista')

//metodo para pegar/buscar toda a lista

router.get('/', async (req, res) => {
    try{
        const lista = await Lista.find()      
        res.json({
            sucess:true,
            data:lista
        })
    }catch(err){
        res.json({
            sucess:false,
            message:err
        })
    }
   
})

//ler uma pessoa
router.get('/:slug', async (req, res) => {
    try{
        const lista = await Lista.findOne({
            slug: req.params.slug
        })

        res.json({
            sucess:true,
            data:lista
        })
    }catch(err){
        res.json({
            sucess:false,
            message:err
        })
    }
})

//metodo para criar uma lista
router.post('/', async (req, res) => {
    const lista = new Lista({
        nome: req.body.nome ,
        nascimento: req.body.nascimento
    })

    
    // try{
    //     const listaSalvada = await lista.save()
    //     res.json({
    //         sucess:true,
    //         data:listaSalvada
    //     })
    // }catch(err){
    //     res.json({
    //         sucess:false,
    //         message:err
    //     })
    // }

//para gravar
    lista
        .save()
        .then((data) => {
            res.json({
                sucess:true,
                data
            })
        })
        .catch((err) => {
            res.json({
                sucess:false,
                message:err
            })
        })
})

module.exports = router