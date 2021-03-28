'use scrict'

const response = require('./../response')
const db = require('../Settings/db')

exports.getAllShelfs = (req, res) => {
    db.query('SELECT * FROM `shelfs`', (error,rows,fields) =>{
        if(error){
            response.status(400,error,res)
        }else {
            response.status(200,rows,res)
        }
    })
}