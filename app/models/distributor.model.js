const mongoose = require('mongoose')

const DistributorSchema = mongoose.Schema({
    nama : {
        type: String,
        required: true
    },
    createAt: {
        type: Date
    },
    updateAt: {
        type: Date
    },
    deleteAt: {
        type: Date
    },
    statusDelete : {
        type: Boolean,
        default : false
    }
},{collection : 'distributors'})

module.exports = mongoose.model('Distributor', DistributorSchema)