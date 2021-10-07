const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerJsDocs = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

//Include
require('dotenv/config')
require('./config/db.config')


//Middleware
app.use(bodyParser())
app.use(cors())


//import Dokumentasi
const swgProduk = require('./app/documentation/produk.doc')
const swgPembelian = require('./app/documentation/pembelian.doc')
const swgDistributor = require('./app/documentation/distributor.doc')

const swaggerProduk = swaggerJsDocs(swgProduk)
const swaggerPembelian = swaggerJsDocs(swgPembelian)
const swaggerDistributor = swaggerJsDocs(swgDistributor)

//import routes
const produk = require('./app/controller/produk.controller')
const distributor = require('./app/controller/distributor.controller')
const pembelian = require('./app/controller/pembelian.controller')

//routes-dokumentasi
app.use('/api-docs/produk', swaggerUi.serve, swaggerUi.setup(swaggerProduk))
app.use('/api-docs/pembelian', swaggerUi.serve, swaggerUi.setup(swaggerPembelian))
app.use('/api-docs/distributor', swaggerUi.serve, swaggerUi.setup(swaggerDistributor))

//routes
app.use('/produk', produk)
app.use('/distributor', distributor)
app.use('/pembelian', pembelian)

//listen
app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT}`)
})