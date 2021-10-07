const express = require('express')
const router = express.Router()
const Produk = require('../models/produk.model')
const Pembelian = require('../models/pembelian.model')

router.post('/', async (req, res) => {
    const datas = new Pembelian({
        nama: req.body.nama,
        stok: req.body.stok,
        harga: req.body.harga
    })


    try {

        const data = await datas.save()
        const BH = datas.harga
        const BS = datas.stok

        //Mengambil total pembelian lama
         const total = await Produk.findOne({ _id : req.body.nama})

         const AH = total.totalHarga
         const AS = total.totalProduk

         const TH = BH * BS + AH
         const TP = BS + AS



         //Mengupdate total pembelian baru
         const datax = await Produk.updateOne({ _id: req.body.nama }, {
            totalHarga: TH,
            totalProduk: TP,
          })


        //Mengambil total pembelian baru
        const total2 = await Produk.findOne({ _id : req.body.nama})

        const AH2 = total2.totalHarga
        const AS2 = total2.totalProduk
        const S = total2.stok

        //  //Menentukan harga baru produk
        const hargaBaru = AH2 / AS2
        const stokBaru = S + BS
       

        // // //Mengupdate Stok dan Harga Terbaru
          await Produk.updateOne({ _id : req.body.nama},{
              harga : hargaBaru,
              stok : stokBaru
          })

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
        const data = await Pembelian.find({})
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
        const data = await Pembelian.findOne({ _id: req.params.id })
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
        const data = await Pembelian.updateOne({ _id: req.params.id }, {
            nama: req.body.nama,
            stok: req.body.stok,
            harga: req.body.harga
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
        const data = await Pembelian.deleteOne({_id: req.params.id})
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