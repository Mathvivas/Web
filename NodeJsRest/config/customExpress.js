const express = require('express')          // npm install express
const consign = require('consign')          // npm install consign
const bodyParser = require('body-parser')   // npm install body-parser

module.exports = () => {
    const app = express()   // Executar um servidor

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    consign().include('controllers').into(app)  // Incluindo os controllers dentro deste app

    return app
}