const router = require('express').Router()

router.get('/', (req, res) => {
    //data base
    const data =[
        {nome:"Lua",
        createdAt: '1989-10-29',
        ativo:true,
        idade:25
        },
        {nome:"Sol",
        createdAt: '1985-12-05',
        ativo:true},
    ]

    res.json({
        status:'funcionou',
        data
    })           
})

router.get('/:listaDePessoasId', (req, res) => {
    console.log('O id informado é : ', req.params.listaDePessoasId)

    res.json({
        sucess:true,
        id: req.params.listaDePessoasId
    })
})

router.post('/', (req, res) => {
    res.json(req.body)
})



module.exports = router