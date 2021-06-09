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

exports.updateShelfs = (req,res) => {
    const x = req.body.SLF_CRD_X;
    const y = req.body.SLF_CRD_Y;
    const width = req.body.SLF_WIDTH;
    const height = req.body.SLF_HEIGHT;
    const name = req.body.SLF_NAME;
     
    const sql = `UPDATE shelfs SET shelfs.SLF_CRD_X = ${x}, shelfs.SLF_CRD_Y = ${y} , shelfs.SLF_WIDTH = ${width}, shelfs.SLF_HEIGHT = ${height} WHERE shelfs.SLF_NAME = "${name}"`;
    db.query( sql,(results,error) =>{
        if(error){
            response.status(200,{message: `Update was successful`, results},res)
        }else {
            response.status(400,error,res)
            console.log(error);
        }
    })
}


exports.addShelf = (req,res)  => {
    const x = req.body.SLF_CRD_X;
    const y = req.body.SLF_CRD_Y;
    const width = req.body.SLF_WIDTH;
    const height = req.body.SLF_HEIGHT;
    const name = req.body.SLF_NAME;
    const color = req.body.SLF_COLOR;

    const sql = `INSERT INTO shelfs (SLF_CRD_X,SLF_CRD_Y,SLF_WIDTH,SLF_HEIGHT,SLF_NAME,SLF_COLOR) VALUES (${x},${y},${width},${height},"${name}","${color}")`
    db.query( sql,(results,error) =>{
        if(error){
            response.status(200,{message: `Insert was succesful`, results},res)
        }else {
            response.status(400,error,res)
            console.log(error);
        }
    })
}

exports.deleteShelf = (req,res) => {
    db.query(`DELETE FROM shelfs WHERE shelfs.SLF_NAME = "${req.params.name}"`, (error,rows,fields) =>{
        if(error){
            response.status(400,error,res)
        }else {
            response.status(200,{message: `Delete was succesful`, results},res)
            //console.log(error);
        }
    })
}