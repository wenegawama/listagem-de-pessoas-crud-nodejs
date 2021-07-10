const router = require('express').Router()
const Lista = require('../models/Lista')

router.get('/', (req, res) => {
    const lista = Lista.find()  
    
    res.json({
        sucess:true,
        data:lista
    })
})

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