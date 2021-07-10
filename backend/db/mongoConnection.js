const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_URL_CONNECT,
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useUnifiedTopology:true 
    },
    () => console.log('connectou com o mongo') 
    )
