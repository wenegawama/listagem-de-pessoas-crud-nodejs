const router = require('express').Router()

router.get('/', (req, res) => {
    //data base
    const data =[
        {nome:"Lua",
        createdAt: '1989-10-29',
        ativo:true},
        {nome:"Sol",
        createdAt: '1985-12-05',
        ativo:true},
    ]

    res.json({
        status:'funcionou',
        data
    })           
})

module.exports = router