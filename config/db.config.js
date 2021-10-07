const mongoose = require('mongoose')

//connect to database
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Gagal Terhubung Ke Database!!'))
db.once('open', () => {
    console.log('Berhasil Terhubung Ke Database')
})
