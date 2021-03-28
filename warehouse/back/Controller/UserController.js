'use scrict'

const response = require('./../response')
const db = require('../Settings/db')
const bcrypt = require('bcrypt')

exports.getAllUsers = (req, res) => {
    db.query('SELECT USR_FULLNAME,USR_LOGIN FROM `users`', (error,rows,fields) =>{
        if(error){
            response.status(400,error,res)
        }else {
            response.status(200,rows,res)
        }
    })
}

exports.signup = (req, res) => {

    db.query("SELECT `id`, `USR_LOGIN`, `USR_PASSWORD` FROM `users` WHERE `USR_LOGIN`  = '"+req.body.USR_LOGIN+"'",(error,rows,fields) => {
        if(error){
            response.status(400,error,res)
        }else if(typeof rows !== 'undefined' && rows.length > 0){
            console.log(rows);
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw => {
                response.status(302,{message: `User with login - ${rw.USR_LOGIN} already exists`},res)
                return true
            })
        }else {
            const login = req.body.USR_LOGIN
            const fullname = req.body.USR_FULLNAME
            const salt = bcrypt.genSaltSync(15)
            const password = bcrypt.hashSync( req.body.USR_PASSWORD,salt)
            const role = req.body.USR_ROLE_ID !== ''? req.body.USR_ROLE_ID : 1


            const sql = "INSERT INTO users (USR_LOGIN, USR_PASSWORD,USR_FULLNAME,USR_ROLE_ID) VALUES('"+login+"', '"+password+"','"+fullname+"','"+role+"')";
            db.query(sql,(results,error) => {
                if(error){
                    response.status(400,error,res)
                }else {
                    response.status(200,{message: `Registration was successful`, results},res)
                }
            })
            console.log(req);
        }

    })

}