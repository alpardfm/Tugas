const auth = require('basic-auth')

const BasicAuth = async (req, res, next) => {

    const user = await auth(req)
    const username = "admin"
    const password = "admin123123"

    if(user && user.name.toLowerCase() === username.toLowerCase() && user.pass === password){
        next()
    }else{

        return res.status(405).json({
            status : res.statusCode,
            message :"Anda Belum Melakukan Authorize"
        })
    }
}

module.exports = BasicAuth