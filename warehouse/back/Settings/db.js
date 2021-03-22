const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'warehouse'
})

connection.connect((error) => {
    if(error) {
        return console.log('bląd lączenia')
    }else{
        return console.log('Działa')
    }
})

module.exports = connection