const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId;

const PembelianSchema = mongoose.Schema({
    produk : {
            type: ObjectID,
            ref: "Produk",
            required : true
        },
    jumlah : {
        type: Number,
        required: true
    },
    hargaBeli : {
        type: Number,
        required: true
    },
    tanggal : {
        type: Date
    },
    distributor:{
        type: ObjectID,
        ref: "Distributor",
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
    statusDelete :{
        type : Boolean,
        default : false
    },
    statusEdit: {
        type: Boolean,
        default : false
    }
},{ collection : 'pembelians'})

module.exports = mongoose.model('Pembelian', PembelianSchema)