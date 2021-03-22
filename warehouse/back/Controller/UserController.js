'use scrict'

const response = require('./../response')
const db = require('../Settings/db')

exports.users = (req, res) => {
    db.query('SELECT * FROM `users`', (error,rows,fields) =>{
        if(error){
            console.log(error);
        }else {
            response.status(rows,res)
        }
    })
}

exports.add = (req, res) => {
    const sql = "INSERT INTO users (USR_LOGIN, USR_PASSWORD, USR_ROLE_ID) VALUES()";
    console.log(req);
}