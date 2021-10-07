const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerJsDocs = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

//Include
require('dotenv/config')
require('./config/db.config')

//Dokumentasi
const swg = require('./config/doc.config')
const swaggerDocs = swaggerJsDocs(swg)

//Middleware
app.use(bodyParser())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


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