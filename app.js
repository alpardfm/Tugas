const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//Include
require('dotenv/config')
require('./config/db.config')

//Middleware
app.use(bodyParser())
app.use(cors())

//import routes
const produk = require('./app/controller/produk.controller')
const distributor = require('./app/controller/distributor.controller')
const pembelian = require('./app/controller/pembelian.controller')

//routes
app.use('/produk', produk)
app.use('/distributor', distributor)
app.use('/pembelian', pembelian)

//listen
app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT}`)
})