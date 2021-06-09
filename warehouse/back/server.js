const express = require('express');
const app = express()
const port = process.env.PORT || 3500
var cors = require('cors')

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./Settings/routes')
routes(app)

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
