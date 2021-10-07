const mongoose = require('mongoose')

const DistributorSchema = mongoose.Schema({
    nama : {
        type: String,
        required: true
    }
},{collection : 'distributors'})

module.exports = mongoose.model('Distributor', DistributorSchema)