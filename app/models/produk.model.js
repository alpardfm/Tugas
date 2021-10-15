const mongoose = require('mongoose')

const ProdukSchema = mongoose.Schema({
    nama : {
        type: String,
        required: true
    },
    stok : {
        type: Number,
        required: true,
    },
    hargaBeli : {
        type: Number,
        required: true
    },
    hargaJual : {
        type: Number
    },
    laba : {
        type: Number
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
    statusDelete:{
        type: Boolean,
        default : false
    }
},{ collection : 'produks'}
)


module.exports = mongoose.model('Produk', ProdukSchema)