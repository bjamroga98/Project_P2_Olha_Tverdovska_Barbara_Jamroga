'use strict'

module.exports = (app) => {
    const indexController = require('../../back/Controller/IndexController')
    const usersController = require('../Controller/UserController')

    app.route('/').get(indexController.index)
    app.route('/users').get(usersController.users)
    app.route('users/add').post(usersController.add)
}