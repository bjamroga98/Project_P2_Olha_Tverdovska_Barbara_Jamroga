'use strict'

module.exports = (app) => {
    const indexController = require('../../back/Controller/IndexController')
    const usersController = require('../Controller/UserController')
    const shelfController = require('../Controller/ShelfController')
    const productController = require('../Controller/ProductsController')

    app
        .route('/api/users')
        .get(usersController.getAllUsers)
    app
        .route('/api/auth/signup')
        .post(usersController.signup)
    app
        .route('/api/shelfs')
        .get(shelfController.getAllShelfs)
    app
        .route('/api/shelfs/locate/:id')
        .get(shelfController.getShelfLocation)
    app
        .route('/api/products')
        .get(productController.getAllProducts)
}