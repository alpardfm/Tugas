const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId;

const PembelianSchema = mongoose.Schema({
    nama : [
        {
            type: ObjectID,
            ref: "Produks"
        }
    ],
    stok : {
        type: Number,
        required: true
    },
    harga : {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Pembelian', PembelianSchema)