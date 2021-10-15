const express = require('express')
const router = express.Router()
const Produk = require('../models/produk.model')

router.post('/', async (req, res) => {

    const Task = new Produk({
        nama: req.body.nama,
        stok: 0,
        hargaBeli: 0,
        hargaJual: 0,
        laba: req.body.laba,
        createAt: Date.now()
    })

    try {
        const data = await Task.save()
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menambah Data',
            data: {
                _id: data._id,
                nama: data.nama,
                laba: data.laba
            }
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

        //Sorting
        const sortBy = req.query.sortBy
        const orderBy = req.query.orderBy

        //Filter Stok---------------------------------------------
        const filters = {}
        const match = {}

        //Filtering Stok Kurang Dari
        if (req.query.kurang) {
            match.$lte = req.query.kurang
        }

        //Filtering Stok Lebih Dari
        if (req.query.lebih) {
            match.$gte = req.query.lebih
        }

        //Rumus Filter
        if (req.query.kurang || req.query.lebih) {
            filters.stok = match
        }

        //-----------------------------------------------------------

        //Searching-----------------------------------
        const search = {}
        const searchs = {}

        if (req.query.search) {
            search.$regex = req.query.search
            searchs.nama = search
        }
        //--------------------------------------------

        const data = await Produk.find({ $and: [searchs, filters, { statusDelete: false }] })
            .select("nama stok hargaJual")
            .limit(parseInt(req.query.limit) || {})
            .skip(parseInt(req.query.skip) || {})
            .sort([[sortBy, parseInt(orderBy)]])

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
         await Produk.updateOne({ _id: req.params.id }, {
            nama: req.body.nama,
            stok: 0,
            hargaBeli: 0,
            hargaJual: 0,
            laba: req.body.laba,
            updateAt: Date.now()
        })
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Mengupdate Data',
        })
    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err,
        })
    }
})


router.delete('/:id', async (req, res) => {
    try {
         await Produk.updateOne({ _id: req.params.id }, {
            statusDelete: true,
            deleteAt: Date.now()
        })
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menghapus Data'
        })
    } catch (err) {
        res.status(200).json({
            status: res.statusCode,
            message: err,
        })
    }
})


module.exports = router