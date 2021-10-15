const express = require('express')
const router = express.Router()
const Distributor = require('../models/distributor.model')

router.post('/', async (req, res) => {
    const datas = new Distributor({
        nama: req.body.nama,
        createAt: Date.now()
    })

    try {
        const data = await datas.save()
        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menambah Data',
            data: {
                _id: data._id,
                nama: data.nama
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

        //Searching-----------------------------------
        const search = {}
        const searchs = {}

        if (req.query.search) {
            search.$regex = req.query.search
            searchs.nama = search
        }
        //--------------------------------------------

        const data = await Distributor.find({
                $and: [searchs, {
                    statusDelete: false
                }]
            })
            .select("nama")
            .limit(parseInt(req.query.limit) || {})
            .skip(parseInt(req.query.skip) || {})
            .sort([
                [sortBy, parseInt(orderBy)]
            ])

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
        const data = await Distributor.findOne({
            _id: req.params.id
        })
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

        await Distributor.updateOne({
            _id: req.params.id
        }, {
            nama: req.body.nama,
            updateAt: Date.now()
        })

        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Mengupdate Data'
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

        await Distributor.updateOne({
            _id: req.params.id
        }, {
            statusDelete: true,
            deleteAt: Date.now()
        })

        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menghapus Data'
        })

    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err,
        })
    }
})


module.exports = router