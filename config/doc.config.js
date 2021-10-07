module.exports = {
    swaggerDefinition:{
    openapi : '3.0.0',
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
    paths:{
        '/produk':{
            get:{
                summary: '',
                description: 'Berfungsi untuk mengambil semua data produk',
                tags: ['Produk'],
                responses: {
                    '200':{
                        description:'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    $ref: '#/components/schemas/Produk'
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            },post:{
                summary: '',
                description: 'Berfungsi untuk menambah data produk baru',
                tags: ['Produk'],
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                type: Object,
                                properties:{
                                    'nama':{
                                        type: String,
                                        example: "Nama Produk",
                                    },'distributor':{
                                        type: Object,
                                        example: "id distributor"
                                    }
                                }                   
                            }
                        }
                    }
                },responses:{
                    '200':{
                        description: 'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    type: Object,
                                    properties:{
                                        'nama':{
                                            type: String,
                                            example: "Sabun",
                                        },'distributor':{
                                            type: Object,
                                            example: "615e8faddd4736f527cbdcd9"
                                        }
                                    }
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            }
        },

        '/produk/{id}':{
            get:{
                summary: '',
                description: 'Berfungsi untuk mengambil data produk berdasarkan id',
                tags: ['Produk'],
                responses: {
                    '200':{
                        description:'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    $ref: '#/components/schemas/Produk'
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            },

            put:{
                summary: '',
                description: 'Berfungsi untuk mengupdate data produk',
                tags : ['Produk'],
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                type: Object,
                                properties:{
                                    'nama':{
                                        type: String,
                                        example: "Nama Produk",
                                    },'distributor':{
                                        type: Object,
                                        example: "id distributor"
                                    }
                                }                   
                            }
                        }
                    }
                },responses:{
                    '200':{
                        description: 'Data Terupdate',
                    },'400':{
                        description: 'Error'
                    }
                }                
            },

            delete:{
                summary: '',
                description: 'Berfungsi untuk menghapus data produk',
                tags: ['Produk'],
                responses:{
                    '200':{
                        description: 'Data Terhapus',
                    },'400':{
                        description: 'Error'
                    }
                }
            }
        },

        '/distributor':{
            get:{
                summary: '',
                description: 'Berfungsi untuk mengambil semua data distributor',
                tags: ['Distributor'],
                responses: {
                    '200':{
                        description:'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    $ref: '#/components/schemas/Distributor'
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            },post:{
                summary: '',
                description: 'Berfungsi untuk menambah data distributor baru',
                tags: ['Distributor'],
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                type: Object,
                                properties:{
                                    'nama':{
                                        type: String,
                                        example: "Nama Distributor",
                                    }
                                }                   
                            }
                        }
                    }
                },responses:{
                    '200':{
                        description: 'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    type: Object,
                                    properties:{
                                        'nama':{
                                            type: String,
                                            example: "Distributor Sabun"
                                        }
                                    }
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            }
        },

        '/distributor/{id}':{
            get:{
                summary: '',
                description: 'Berfungsi untuk mengambil data distributor berdasarkan id',
                tags: ['Distributor'],
                responses: {
                    '200':{
                        description:'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    $ref: '#/components/schemas/Distributor'
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            },

            put:{
                summary: '',
                description: 'Berfungsi untuk mengupdate data distributor',
                tags : ['Distributor'],
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                type: Object,
                                properties:{
                                    'nama':{
                                        type: String,
                                        example: "Nama Distributor",
                                    }
                                }                   
                            }
                        }
                    }
                },responses:{
                    '200':{
                        description: 'Data Terupdate',
                    },'400':{
                        description: 'Error'
                    }
                }                
            },

            delete:{
                summary: '',
                description: 'Berfungsi untuk menghapus data distributor',
                tags: ['Distributor'],
                responses:{
                    '200':{
                        description: 'Data Terhapus',
                    },'400':{
                        description: 'Error'
                    }
                }
            }
        },

        '/pembelian':{
            get:{
                summary: '',
                description: 'Berfungsi untuk mengambil semua data pembelian',
                tags: ['Pembelian'],
                responses: {
                    '200':{
                        description:'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    $ref: '#/components/schemas/Pembelian'
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            },post:{
                summary: '',
                description: 'Berfungsi untuk menambah data pembelian baru',
                tags: ['Pembelian'],
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                type: Object,
                                properties:{
                                    'nama':{
                                        type: Object,
                                        example: "Id Produk",
                                    },'stok':{
                                        type: Number,
                                        example : 10
                                    },'harga':{
                                        type: Number,
                                        example : 1000
                                    }
                                }                   
                            }
                        }
                    }
                },responses:{
                    '200':{
                        description: 'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    type: Object,
                                    properties:{
                                        'nama':{
                                            type: Object,
                                            example: "615e8faddd4736f527cbdcd9",
                                        },'stok':{
                                            type: Number,
                                            example : 10
                                        },'harga':{
                                            type: Number,
                                            example : 1000
                                        }
                                    }
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            }
        },

        '/pembelian/{id}':{
            get:{
                summary: '',
                description: 'Berfungsi untuk mengambil data pembelian berdasarkan id',
                tags: ['Pembelian'],
                responses: {
                    '200':{
                        description:'OK',
                        content:{
                            'application/json':{
                                schema:{
                                    $ref: '#/components/schemas/Pembelian'
                                }
                            }
                        }
                    },'400':{
                        description: 'Error'
                    }
                }
            },

            put:{
                summary: '',
                description: 'Berfungsi untuk mengupdate data pembelian',
                tags : ['Pembelian'],
                requestBody:{
                    required: true,
                    content:{
                        'application/json':{
                            schema:{
                                type: Object,
                                properties:{
                                    'nama':{
                                        type: Object,
                                        example: "615e8faddd4736f527cbdcd9",
                                    },'stok':{
                                        type: Number,
                                        example : 10
                                    },'harga':{
                                        type: Number,
                                        example : 1000
                                    }
                                }                   
                            }
                        }
                    }
                },responses:{
                    '200':{
                        description: 'Data Terupdate',
                    },'400':{
                        description: 'Error'
                    }
                }                
            },

            delete:{
                summary: '',
                description: 'Berfungsi untuk menghapus data pembelian',
                tags: ['Pembelian'],
                responses:{
                    '200':{
                        description: 'Data Terhapus',
                    },'400':{
                        description: 'Error'
                    }
                }
            }
        }
        
    },
    components:{
        schemas:{
            'Produk':{
                type: Object,
                properties:{
                  '_id':{
                      type: String,
                      example: "615e8faddd4736f527cbdcd9"
                  },'nama':{
                      type: String,
                      required: true,
                      example: "Sabun"
                  },'stok':{
                      type: Number,
                      example: 10
                  },'harga':{
                      type: Number,
                      example: 1000
                  },'totalProduk':{
                      type: Number,
                      example: 10
                  },'totalHarga':{
                      type: Number,
                      example: 10000
                  },'distributor':{
                      type: Object,
                      required: true,
                      example: [{
                          '_id': "615de8600a22d85b72ad4829",
                          'nama': "Distributor Sabun"
                      }]
                  }  
                },
            },
            
            'Distributor':{
                type: Object,
                properties:{
                    '_id':{
                        type: String,
                        example: "615e8faddd4736f527cbdcd9",
                    },'nama':{
                        type: String,
                        required: true,
                        example: "Distributor Sabun"
                    }
                }
            },

            'Pembelian':{
                type: Object,
                properties:{
                   '_id':{
                       type: String,
                       example: "615e8faddd4736f527cbdcd9"
                   },'nama':{
                       type: Object,
                       ref : 'Produk',
                       example : [{
                           '_id': "615e8faddd4736f527cbdcd9",
                           'nama': "Sabun"
                        }]
                   },'stok':{
                       type: Number,
                       required: true,
                       example : 10
                   },'harga':{
                       type: Number,
                       required: true,
                       example: 2000
                   } 
                }
            }
        }
    }
  },

  apis: ["app.js"]
};