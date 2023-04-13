
const routerProducts = require('./routerProducts')
const routerRealTimeP = require('./routerRealTimeP')
const routerCarts = require('./routerCarts')
const productsController = require('../dao/dbManager/controller.products')
const cartController = require('../dao/dbManager/controller.carts')
const messageController = require('../dao/dbManager/controller.messages')

const router = app => {
  app.use('/api/products', routerProducts)
  app.use('/api/carts', routerCarts)
  app.use('/api/realTimeProducts', routerRealTimeP)
  app.use('/api/dbProducts', productsController)
  app.use('/api/dbCart', cartController)
  app.use('/api/messages', messageController)
}

module.exports = router