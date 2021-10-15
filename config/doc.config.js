module.exports = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "Documentation API", // short title.
            description: "dokumentasi untuk api kelola produk", //  desc.
            version: "0.0.1", // version number
            contact: {
                name: "Alpardfm", // your name
                email: "alpardfm@gmail.com", // your email
                url: "kelola-produk.herokuapp.com", // your website
            },
            servers: ["http://localhost:3003"]
        },
        paths: {
            '/produk': {
                get: {
                    security:[{
                        basicAuth: []
                    }],summary: 'Get All Produk',
                    description: 'Berfungsi untuk mengambil semua data produk',
                    tags: ['Produk'],
                    parameters: [{
                        name: "kurang",
                        in: "query",
                        required: true,
                        description: "Memfilter berdasarkan stok kurang dari",
                        schema: {
                            type: Number,
                            example: 1
                        }
                    }, {
                        name: "lebih",
                        in: "query",
                        required: true,
                        description: "Memfilter berdasarkan stok lebih dari",
                        schema: {
                            type: Number,
                            example: 1
                        }
                    }, {
                        name: "sortBy",
                        in: "query",
                        required: true,
                        description: "Sorting berdasarkan",
                        schema: {
                            type: String,
                            example: "nama"
                        }
                    }, {
                        name: "orderBy",
                        in: "query",
                        required: true,
                        description: "Mengurutkan dari terkecil (1) atau terbesar (-1)",
                        schema: {
                            type: Number,
                            example: "1"
                        }
                    }, {
                        name: "search",
                        in: "query",
                        required: true,
                        description: "Mencari data berdasarkan nama",
                        schema: {
                            type: String,
                            example: "Mie Goreng"
                        }
                    }, {
                        name: "limit",
                        in: "query",
                        required: true,
                        description: "menampilkan data beberapa tergantung limit yang dimasukan",
                        schema: {
                            type: Number,
                            example: 3
                        }
                    }, {
                        name: "skip",
                        in: "query",
                        required: true,
                        description: "melewati beberapa data supaya tidak ditampilkan",
                        schema: {
                            type: Number,
                            example: 2
                        }
                    }
                    ], responses: {
                        '200': {
                            description: 'Berhasil Menampilkan Data',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: Object,
                                        properties: {
                                            '_id': {
                                                type: Object,
                                                example: "6165a2529c74ca68d3d7dfb3"
                                            }, 'nama': {
                                                type: String,
                                                example: "Mie Goreng"
                                            }, 'stok': {
                                                type: Number,
                                                example: 7000
                                            }, 'hargaJual': {
                                                type: Number,
                                                example: 3000
                                            }
                                        }
                                    }
                                }
                            }
                        }, '400': {
                            description: 'Gagal Menampilkan Data'
                        },'405':{
                            $ref: '#components/responses/UnauthorizedError'
                        }
                    }
                }, post: {
                    security:[{
                        basicAuth: []
                    }],summary: 'Add Produk',
                    description: 'Berfungsi untuk menambah data produk baru',
                    tags: ['Produk'],
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: Object,
                                    properties: {
                                        'nama': {
                                            type: String,
                                            example: "Mie Goreng",
                                        }, 'laba': {
                                            type: Number,
                                            example: 500
                                        }
                                    }
                                }
                            }
                        }
                    }, responses: {
                        '200': {
                            description: 'Berhasil Menambah Data',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: Object,
                                        properties: {
                                            '_id': {
                                                type: Object,
                                                example: "6165a2529c74ca68d3d7dfb3"
                                            },
                                            'nama': {
                                                type: String,
                                                example: "Mie Goreng",
                                            }, 'laba': {
                                                type: Number,
                                                example: 500
                                            }
                                        }
                                    }
                                }
                            }
                        }, '400': {
                            description: 'Gagal Menambah Data'
                        },'405':{
                            $ref: '#components/responses/UnauthorizedError'
                        }
                    }
                }
            },

            '/produk/{id}': {
                get: {
                    security:[{
                        basicAuth: []
                    }],summary: 'Get Detail Produk By Id',
                    description: 'Berfungsi untuk mengambil data produk berdasarkan id dan hasilnya lebih detail daripada get all',
                    tags: ['Produk'],
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Id Produk Yang Akan Dicari",
                        schema: {
                            type: Object,
                            example: "616860ff5c6c525ed18862b0"
                        }
                    }
                    ], responses: {
                        '200': {
                            description: 'Berhasil Menampilkan Data',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/Produk'
                                    }
                                }
                            }
                        }, '400': {
                            description: 'Gagal Menampilkan Data'
                        },'405':{
                            $ref: '#components/responses/UnauthorizedError'
                        }
                    }
                },

                put: {
                    security:[{
                        basicAuth: []
                    }],summary: 'Update Produk',
                    description: 'Berfungsi untuk mengupdate data produk',
                    tags: ['Produk'],
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "Id Produk Yang Akan Di Update",
                        schema: {
                            type: Object,
                            example: "616860ff5c6c525ed18862b0"
                        }
                    }
                    ], requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: Object,
                                    properties: {
                                        'nama': {
                                            type: String,
                                            example: "Mie Goreng",
                                        }, 'laba': {
                                            type: Number,
                                            example: 500
                                        }
                                    }
                                }
                            }
                        }
                    }, responses: {
                        '200': {
                            description: 'Berhasil Mengupdate Data',
                        }, '400': {
                            description: 'Gagal Mengupdate Data'
                        },'405':{
                            $ref: '#components/responses/UnauthorizedError'
                        }
                    }
                },

                delete: {
                    security:[{
                        basicAuth: []
                    }],summary: 'Delete Produk',
                    description: 'Berfungsi untuk menghapus data produk',
                    tags: ['Produk'],
                    parameters: [{
                        name: "id",
                        in: "path",
                        required: true,
                        description: "id produk",
                        schema: {
                            type: Object,
                            example: "616860ff5c6c525ed18862b0"
                        }
                    }
                    ], responses: {
                        '200': {
                            description: 'Berhasil Menghapus Data',
                        }, '400': {
                            description: 'Gagal Menghapus Data'
                        },'405':{
                            $ref: '#components/responses/UnauthorizedError'
                        }
                    }
                }
            },

            '/distributor': {
                get: {
                    security:[{
                        basicAuth: []
                    }],summary: 'Get All Distributor',
                    description: 'Berfungsi untuk mengambil semua data distributor',
                    tags: ['Distributor'],
                    parameters: [
                        {
                            name: "sortBy",
                            in: "query",
                            required: true,
                            description: "Sorting berdasarkan",
                            schema: {
                                type: String,
                                example: "nama"
                            }
                        }, {
                            name: "orderBy",
                            in: "query",
                            required: true,
                            description: "Mengurutkan dari terkecil (1) atau terbesar (-1)",
                            schema: {
                                type: Number,
                                example: "1"
                            }
                        }, {
                            name: "search",
                            in: "query",
                            required: true,
                            description: "Mencari data berdasarkan nama",
                            schema: {
                                type: String,
                                example: "Indo"
                            }
                        }, {
                            name: "limit",
                            in: "query",
                            required: true,
                            description: "menampilkan data beberapa tergantung limit yang dimasukan",
                            schema: {
                                type: Number,
                                example: 2
                            }
                        }, {
                            name: "skip",
                            in: "query",
                            required: true,
                            description: "melewati beberapa data supaya tidak ditampilkan",
                            schema: {
                                type: Number,
                                example: 1
                            }
                        }
                    ],responses: {
                    '200': {
                        description: 'Berhasil Menampilkan Data',
                        content: {
                            'application/json': {
                                schema: {
                                    type : Object,
                                    properties: {
                                        '_id': {
                                            type: Object,
                                            example: "6165a2529c74ca68d3d7dfb3"
                                        }, 'nama': {
                                            type: String,
                                            example: "Indofood"
                                        }
                                    }
                                }
                            }
                        }
                    }, '400': {
                        description: 'Gagal Menampilkan Data'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            }, post: {
                security:[{
                    basicAuth: []
                }],summary: 'Add Distributor',
                description: 'Berfungsi untuk menambah data distributor baru',
                tags: ['Distributor'],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: Object,
                                properties: {
                                    'nama': {
                                        type: String,
                                        example: "Indofood",
                                    }
                                }
                            }
                        }
                    }
                }, responses: {
                    '200': {
                        description: 'Berhasil Menambah Data',
                        content: {
                            'application/json': {
                                schema: {
                                    type: Object,
                                    properties: {
                                        '_id' : {
                                            type : Object,
                                            example : "6165a2529c74ca68d3d7dfb3"
                                        },'nama': {
                                            type: String,
                                            example: "Indofood"
                                        }
                                    }
                                }
                            }
                        }
                    }, '400': {
                        description: 'Gagal Menampilkan Data'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            }
        },

        '/distributor/{id}': {
            get: {
                security: [{
                    basicAuth: []
                }],summary: 'Get Detail Distributor By Id',
                description: 'Berfungsi untuk mengambil data distributor berdasarkan id',
                tags: ['Distributor'],
                parameters:[
                    {
                        name : "id",
                        in : "path",
                        required : true,
                        description : "Id Distributor",
                        schema : {
                            type : Object,
                            example : "616861af5c6c525ed18862c1"
                        }
                    }
                ],responses: {
                    '200': {
                        description: 'Berhasil Menampilkan Data',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Distributor'
                                }
                            }
                        }
                    }, '400': {
                        description: 'Gagal Menampilkan Data'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            },

            put: {
                security:[{
                    basicAuth: []
                }],summary: 'Update Distributor',
                description: 'Berfungsi untuk mengupdate data distributor',
                tags: ['Distributor'],
                parameters:[
                    {
                        name : "id",
                        in : "path",
                        required : true,
                        description : "Id Distributor",
                        schema : {
                            type : Object,
                            example : "616861af5c6c525ed18862c1"
                        }
                    }
                ],requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: Object,
                                properties: {
                                    'nama': {
                                        type: String,
                                        example: "Indofood",
                                    }
                                }
                            }
                        }
                    }
                }, responses: {
                    '200': {
                        description: 'Berhasil Mengupdate Data',
                    }, '400': {
                        description: 'Gagal Mengupdate Data'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            },

            delete: {
                security:[{
                    basicAuth: []
                }],summary: 'Delete Distributor',
                description: 'Berfungsi untuk menghapus data distributor',
                tags: ['Distributor'],
                parameters:[
                    {
                        name : "id",
                        in : "path",
                        required : true,
                        description : "Id Distributor",
                        schema : {
                            type : Object,
                            example : "616861af5c6c525ed18862c1"
                        }
                    }
                ],responses: {
                    '200': {
                        description: 'Berhasil Menghapus Data',
                    }, '400': {
                        description: 'Gagal Menghapus Data'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            }
        },

        '/pembelian': {
            get: {
                security:[{
                    basicAuth: []
                }],summary: 'Get All Pembelian',
                description: 'Berfungsi untuk mengambil semua data pembelian',
                tags: ['Pembelian'],
                parameters: [{
                    name: "tanggal",
                    in: "query",
                    required: true,
                    description: "Memfilter pembelian berdasarkan tanggal",
                    schema: {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }
                }, {
                    name: "produk",
                    in: "query",
                    required: true,
                    description: "Memfilter pembelian berdasarkan produk",
                    schema: {
                        type: Object,
                        example: "6165a2529c74ca68d3d7dfb3"
                    }
                }, {
                    name: "sortBy",
                    in: "query",
                    required: true,
                    description: "Sorting berdasarkan",
                    schema: {
                        type: String,
                        example: "tanggal"
                    }
                }, {
                    name: "orderBy",
                    in: "query",
                    required: true,
                    description: "Mengurutkan dari terkecil (1) atau terbesar (-1)",
                    schema: {
                        type: Number,
                        example: 1
                    }
                },{
                    name: "limit",
                    in: "query",
                    required: true,
                    description: "menampilkan data beberapa tergantung limit yang dimasukan",
                    schema: {
                        type: Number,
                        example: 3
                    }
                }, {
                    name: "skip",
                    in: "query",
                    required: true,
                    description: "melewati beberapa data supaya tidak ditampilkan",
                    schema:{
                        type: Number,
                        example: 1
                    }
                }
                ],responses: {
                    '200': {
                        description: 'Berhasil Menampilkan Data',
                        content: {
                            'application/json': {
                                schema: {
                                    type : Object,
                                    properties: {
                                        "_id" : {
                                            type : Object,
                                            example : "6165b4c97daf30f90355e0fd"
                                        },"produk": {
                                            type: Object,
                                            example : {
                                                "_id": "6165a2529c74ca68d3d7dfb3",
                                                "nama": "Mie Goreng"
                                            }
                                        },"jumlah":{
                                            type: Number,
                                            example : 1000
                                        },"hargaBeli":{
                                            type: Number,
                                            example: 3000
                                        },"tanggal":{
                                            type:Date,
                                            example: "2021-10-12T16:16:09.704Z"
                                        },"distributor":{
                                            type: Object,
                                            example :{
                                                "_id": "616590d252bbc97391174bf5",
                                                "nama": "Indofoood"
                                            }
                                        },"statusEdit":{
                                            type: Boolean,
                                            example: false
                                        }
                                    }
                                }
                            }
                        }
                    }, '400': {
                        description: 'Gagal Menampilkan Data'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            }, post: {
                security:[{
                    basicAuth: []
                }],summary: 'Add Pembelian',
                description: 'Berfungsi untuk menambah data pembelian baru',
                tags: ['Pembelian'],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: Object,
                                properties: {
                                    'produk': {
                                        type: Object,
                                        example: "6165a2529c74ca68d3d7dfb3",
                                    },'jumlah': {
                                        type: Number,
                                        example: 1000
                                    },'hargaBeli': {
                                        type: Number,
                                        example: 1000
                                    },'distributor':{
                                        type: Object,
                                        example: "616590d252bbc97391174bf5"
                                    }
                                }
                            }
                        }
                    }
                }, responses: {
                    '200': {
                        description: 'Berhasil Menambah Data',
                        content: {
                            'application/json': {
                                schema: {
                                    type: Object,
                                    properties: {
                                        '_id': {
                                            type : Object,
                                            example : "6165b4c97daf30f90355e0fd"
                                        },'produk': {
                                            type: Object,
                                            example: "6165a2529c74ca68d3d7dfb3",
                                        }, 'jumlah': {
                                            type: Number,
                                            example: 1000
                                        }, 'hargaBeli': {
                                            type: Number,
                                            example: 3000
                                        }, 'totalHarga':{
                                            type: Number,
                                            example :3000000
                                        }, 'distributor': {
                                            type: Object,
                                            example: "616590d252bbc97391174bf5"
                                        }
                                    }
                                }
                            }
                        }
                    }, '400': {
                        description: 'Gagal Menampilkan Data'
                    }, '401':{
                        description: 'Produk Tidak Ditemukan'
                    }, '402':{
                        description: 'Distributor Tidak Ditemukan'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            }
        },

        '/pembelian/{id}': {
            get: {
                security:[{
                    basicAuth: []
                }],summary: 'Get Detail Pembelian By Id',
                description: 'Berfungsi untuk mengambil data pembelian berdasarkan id',
                tags: ['Pembelian'],
                parameters:[
                    {
                        name : "id",
                        in : "path",
                        required : true,
                        description : "Id Pembelian",
                        schema : {
                            type : Object,
                            example : "6169745aacac16c11dfa70f9"
                        }
                    }
                ],responses: {
                    '200': {
                        description: 'Berhasil Menampilkan Data',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Pembelian'
                                }
                            }
                        }
                    }, '400': {
                        description: 'Gagal Menampilkan Data'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            },

            put: {
                security: [{
                    basicAuth:[]
                }],summary: 'Update Pembelian',
                description: 'Berfungsi untuk mengupdate data pembelian',
                tags: ['Pembelian'],
                parameters:[
                    {
                        name : "id",
                        in : "path",
                        required : true,
                        description : "Id Pembelian",
                        schema : {
                            type : Object,
                            example : "6169745aacac16c11dfa70f9"
                        }
                    }
                ],requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: Object,
                                properties: {
                                    'produk': {
                                        type: Object,
                                        example: "6165a2529c74ca68d3d7dfb3",
                                    },'jumlah': {
                                        type: Number,
                                        example: 1000
                                    },'hargaBeli': {
                                        type: Number,
                                        example: 1000
                                    },'distributor':{
                                        type: Object,
                                        example: "616590d252bbc97391174bf5"
                                    }
                                }
                            }
                        }
                    }
                }, responses: {
                    '200': {
                        description: 'Berhasil Mengupdate Data',
                    },'400': {
                        description: 'Gagal Mengupdate Data'
                    },'401':{
                        description: 'Produk Tidak Ditemukan',
                    },'402':{
                        description: 'Distributor Tidak Ditemukan'
                    },'403':{
                        description: 'Maaf Data Tidak Bisa Di Edit Atau Dihapus Harap Hubungi Developer'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            },

            delete: {
                security:[{
                    basicAuth: []
                }],summary: 'Delete Pembelian',
                description: 'Berfungsi untuk menghapus data pembelian',
                tags: ['Pembelian'],
                parameters:[
                    {
                        name : "id",
                        in : "path",
                        required : true,
                        description : "Id Pembelian",
                        schema : {
                            type : Object,
                            example : "6169745aacac16c11dfa70f9"
                        }
                    }
                ],responses: {
                    '200': {
                        description: 'Berhasil Menghapus Data',
                    }, '400': {
                        description: 'Gagal Menghapus Data'
                    }, '403':{
                        description: 'Maaf Data Tidak Bisa Di Edit Atau Dihapus Harap Hubungi Developer'
                    },'405':{
                        $ref: '#components/responses/UnauthorizedError'
                    }
                }
            }
        }

    },
    components: {
        securitySchemes:{
            basicAuth:{
                type: 'http',
                scheme: 'basic'
            }
        },responses:{
            UnauthorizedError:{
                description: "Anda Belum Melakukan Authentication"
            }
        },schemas: {
            'Produk': {
                type: Object,
                properties: {
                    '_id': {
                        type: Object,
                        example: "6165a2609c74ca68d3d7dfb5"
                    }, 'nama': {
                        type: String,
                        required: true,
                        example: "Indomie"
                    }, 'stok': {
                        type: Number,
                        example: 7000
                    }, 'hargaBeli': {
                        type: Number,
                        example: 3000
                    }, 'hargaJual': {
                        type: Number,
                        example: 3500
                    }, 'laba': {
                        type: Number,
                        required: true,
                        example: 500
                    }, 'createAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'updateAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'deleteAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'statusDelete': {
                        type: Boolean,
                        example: false
                    }
                },
            },

            'Distributor': {
                type: Object,
                properties: {
                    '_id': {
                        type: Object,
                        example: "615e8faddd4736f527cbdcd9",
                    }, 'nama': {
                        type: String,
                        required: true,
                        example: "Indofood"
                    }, 'createAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'updateAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'deleteAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'statusDelete': {
                        type: Boolean,
                        example: false
                    }
                }
            },

            'Pembelian': {
                type: Object,
                properties: {
                    '_id': {
                        type: Object,
                        example: "6165b4c97daf30f90355e0fd"
                    }, 'produk': {
                        type: Object,
                        ref: 'Produk',
                        required: true,
                        example: {
                            '_id': "6165a2529c74ca68d3d7dfb3",
                            'nama': "Mie Goreng"
                        }
                    }, 'jumlah': {
                        type: Number,
                        required: true,
                        example: 1000
                    }, 'hargaBeli': {
                        type: Number,
                        required: true,
                        example: 3000
                    }, 'tanggal': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'distributor': {
                        type: Object,
                        ref: 'Distributor',
                        required: true,
                        example: {
                            '_id': "616590d252bbc97391174bf5",
                            'nama': "Indofood"
                        }
                    }, 'createAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'updateAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'deleteAt': {
                        type: Date,
                        example: "2021-10-12T14:57:22.650Z"
                    }, 'statusEdit': {
                        type: Boolean,
                        example: false
                    }, 'statusDelete': {
                        type: Boolean,
                        example: false
                    }
                }
            }
        }
    }
},

    apis: ["app.js"]
};