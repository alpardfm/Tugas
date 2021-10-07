const express = require('express')
const router = express.Router()
const Produk = require('../models/produk.model')
const Distributor = require('../models/distributor.model')

router.post('/', async (req, res) => {
    const datas = new Produk({
        nama: req.body.nama,
        stok: 0,
        harga: 0,
        totalProduk : 0,
        totalHarga : 0,
        distributor: req.body.distributor
    })

    try {
        const data = await datas.save()
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menambah Data',
            data
        })

    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err,
        })

    }

})


router.get('/', async (req, res) => {
    try {
        const data = await Produk.find({})
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menampilkan Data',
            data
        })
    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err,
        })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const data = await Produk.findOne({ _id: req.params.id })
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menampilkan Data',
            data
        })
    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err,
        })
    }
})



router.put('/:id', async (req, res) => {
    try {
        const data = await Produk.updateOne({ _id: req.params.id }, {
            nama: req.body.nama,
            stok: 0,
            harga: 0,
            distributor: req.body.distributor
        })
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Mengupdate Data',
            data
        })
    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err,
        })
    }
})

//DELETE BERITA
router.delete('/:id', async (req, res) => {
    try {
        const data = await Produk.deleteOne({_id: req.params.id})
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menghapus Data',
            data
        })
    } catch (err) {
        res.status(200).json({
            status: res.statusCode,
            message: err,
        })
    }
})


module.exports = router