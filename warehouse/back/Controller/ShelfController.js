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

exports.getShelfLocation = (req,res) => {
    db.query(`SELECT shelfs.SLF_CRD_X, shelfs.SLF_CRD_Y, shelfs.SLF_HEIGHT, shelfs.SLF_WIDTH, shelfs.SLF_NAME FROM products INNER JOIN shelfs on shelfs.ID = PRD_SLF_ID WHERE products.PRD_CODE = ${req.params.id} `, (error,rows,fields) =>{
        if(error){
            response.status(400,error,res)
        }else {
            response.status(200,rows,res)
        }
    })
}