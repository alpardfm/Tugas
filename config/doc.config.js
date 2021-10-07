module.exports = {
    swaggerDefinition:{
    info: {
      title: "Simple Todos API", // short title.
      description: "A simple todos API", //  desc.
      version: "1.0.0", // version number
      contact: {
        name: "John doe", // your name
        email: "john@web.com", // your email
        url: "web.com", // your website
      },
      server: ["http://localhost:3003"]
    }
  },
  apis: ["app.js"]
};