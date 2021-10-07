const mongoose = require('mongoose')

const DistributorSchema = mongoose.Schema({
    nama : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Distributor', DistributorSchema)