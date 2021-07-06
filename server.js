const express = require('express')
const api = require('./backend/routes')
const app = express()


app.get('/', (req, res) => {
    res.json({
        'succes':true
    })
})

app.use('/api', api)

const PORT = 8080
app.listen(PORT, () => {
    console.log('Iniciando o servidor express')
})