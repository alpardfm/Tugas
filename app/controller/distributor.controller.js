const express = require('express')
const router = express.Router()
const Distributor = require('../models/distributor.model')

router.post('/', async (req, res) => {
    const datas = new Distributor({
        nama: req.body.nama
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
        const data = await Distributor.find({})
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
        const data = await Distributor.findOne({ _id: req.params.id })
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
        const data = await Distributor.updateOne({ _id: req.params.id }, {
            nama: req.body.nama
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
        const data = await Distributor.deleteOne({_id: req.params.id})
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