const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId;

const ProdukSchema = mongoose.Schema({
    nama : {
        type: String,
        required: true
    },
    stok : {
        type: Number,
        required: true
    },
    harga : {
        type: Number,
        required: true
    },
    totalProduk : {
        type: Number
    },
    totalHarga : {
        type: Number
    },
    distributor :{
            type: ObjectID,
            ref: "Distributors",
            
    }
},{ collection : 'produks'}
)

module.exports = mongoose.model('Produk', ProdukSchema)