const express = require('express')
const router = express.Router()
const Produk = require('../models/produk.model')
const Distributor = require('../models/distributor.model')
const Pembelian = require('../models/pembelian.model')
const {
    updateOne
} = require('../models/produk.model')

router.post('/', async (req, res) => {
    const datas = new Pembelian({
        produk: req.body.produk,
        jumlah: req.body.jumlah,
        hargaBeli: req.body.hargaBeli,
        distributor: req.body.distributor,
        tanggal: Date.now(),
        createAt: Date.now()
    })


    try {

        //Cek Produk
        const produks = await Produk.findOne({
            _id: req.body.produk
        })
        if (!produks) {
            res.status(401).json({
                status: res.statusCode,
                message: "Produk Tidak Ditemukan"
            })
        }

        //Cek Distributor
        const distributors = await Distributor.findOne({
            _id: req.body.distributor
        })
        if (!distributors) {
            res.status(402).json({
                status: res.statusCode,
                message: "Distributor Tidak Ditemukan"
            })
        }

        const data = await datas.save()

        //-----------------------------------------------
        const hargaBeliLama = parseInt(produks.hargaBeli)
        const jumlahStokLama = parseInt(produks.stok)
        const labaProduks = parseInt(produks.laba)
        const hargaBeliBaru = parseInt(datas.hargaBeli)
        const jumlahStokBaru = parseInt(datas.jumlah)

        //Rumus
        const hppLama = hargaBeliLama * jumlahStokLama
        const hppBaru = hargaBeliBaru * jumlahStokBaru
        const jumlahStok = jumlahStokBaru + jumlahStokLama

        //Rumus
        const hpp = (hppLama + hppBaru) / jumlahStok
        const hargaJualBaru = hpp + labaProduks


        await Produk.updateOne({
            _id: req.body.produk
        }, {
            stok: jumlahStok,
            hargaBeli: hargaBeliBaru,
            hargaJual: hargaJualBaru,
            updateAt: Date.now()
        })

        res.status(200).json({
            status: res.statusCode,
            message: 'Berhasil Menambah Data',
            data: {
                _id: data._id,
                produk: data.produk,
                jumlah: data.jumlah,
                hargaBeli: data.hargaBeli,
                totalHarga: hppBaru,
                distributor: data.distributor
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

        //Filter Barang & Tanggal---------------------------------------------
        const filters = {}
        const match = {}

        //Filtering Tanggal
        if (req.query.tanggal) {
            match.tanggal = req.query.tanggal
        }

        //Filtering Produk
        if (req.query.produk) {
            match.produk = req.query.produk
        }
        //-----------------------------------------------------------

        //  //Searching-----------------------------------
        //  const search = {}
        //  const searchs = {}

        //  if (req.query.search) {
        //      search.$regex = req.query.search
        //      searchs.produk = search
        //  }
        //--------------------------------------------

        const data = await Pembelian.find({
                $and: [match, {
                    statusDelete: false
                }]
            })
            .select("tanggal produk jumlah hargaBeli distributor statusEdit")
            .populate("produk", "nama")
            .populate("distributor", "nama")
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
        const data = await Pembelian.findOne({_id: req.params.id})
        .populate("produk", "nama")
        .populate("distributor", "nama")

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


//Update Pembelian
router.put('/:id', async (req, res) => {
    try {

        //CekStatus
        const pembelians = await Pembelian.findOne({
            _id: req.params.id
        })
        if (pembelians.statusEdit == false) {
            res.status(403).json({
                status: res.statusCode,
                message: "Maaf Data Tidak Bisa Di Edit Atau Dihapus Harap Hubungi Developer"
            })
        } else {

            //Cek Produk
            const produks = await Produk.findOne({
                _id: req.body.produk
            })
            if (!produks) {
                res.status(401).json({
                    status: res.statusCode,
                    message: "Produk Tidak Ditemukan"
                })
            } else {

                //Cek Distributor
                const distributors = await Distributor.findOne({
                    _id: req.body.distributor
                })
                if (!distributors) {
                    res.status(402).json({
                        status: res.statusCode,
                        message: "Distributor Tidak Ditemukan"
                    })
                } else {

                    await Pembelian.updateOne({_id: req.params.id}, {
                        produk: req.body.produk,
                        jumlah: req.body.jumlah,
                        hargaBeli: req.body.hargaBeli,
                        distributor: req.body.distributor,
                        updateAt: Date.now()
                    })

                    res.status(200).json({
                        status: res.statusCode,
                        message: 'Berhasil Mengupdate Data'
                    })
                }
            }
        }
    } catch (err) {
        res.status(400).json({
            status: res.statusCode,
            message: err,
        })
    }
})

//DELETE Pembelian
router.delete('/:id', async (req, res) => {
    try {

        //CekStatus
        const pembelians = await Pembelian.findOne({
            _id: req.params.id
        })
        if (pembelians.statusEdit == false) {
            res.status(403).json({
                status: res.statusCode,
                message: "Maaf Data Tidak Bisa Di Edit Atau Dihapus Harap Hubungi Developer"
            })
        } else {
            
            await Pembelian.updateOne({
                _id: req.params.id
            }, {
                statusDelete: true,
                deleteAt: Date.now()
            })
            res.status(200).json({
                status: res.statusCode,
                message: 'Berhasil Menghapus Data'
            })
        }


    } catch (err) {
        res.status(200).json({
            status: res.statusCode,
            message: err,
        })
    }
})


module.exports = router