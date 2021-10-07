module.exports = {
    swaggerDefinition:{
    info: {
      title: "Documentation API", // short title.
      description: "dokumentasi untuk api kelola produk", //  desc.
      version: "0.0.1", // version number
      contact: {
        name: "Alpardfm", // your name
        email: "alpardfm@gmail.com", // your email
        url: "kelola-produk.herokuapp.com", // your website
      },
      server: ["http://localhost:3003"]
    }
  },
  apis: ["app.js"]
};