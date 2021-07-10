const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const api = require('./backend/routes')
//console.log('nome do banco de dados', process.env.MONGO_DB)
//console.log('nome do usuario', process.env.MONGO_USER)



const app = express()
//username mongodb: wenega
//password mongodb:8snAAJgUK@7u6@g
//mongo Url Conection:  mongodb+srv://wenega:<password>@cluster0.gobcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({
        'sucess':true
    })
})

app.use('/api', api)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Iniciando o servidor express')
})