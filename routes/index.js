const productRouter = require('./products.router')

function routerApi(app) {
    app.use('/products', productRouter)
}


const seminariosRouter = require('./seminarios.router')

function routerApi(app) {
    app.use('/seminarios', seminariosRouter)
}

module.exports = routerApi