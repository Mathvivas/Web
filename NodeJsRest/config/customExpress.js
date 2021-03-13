const express = require('express')  // npm install express
const consign = require('consign')

module.exports = () => {
    const app = express()   // Executar um servidor

    consign().include('controllers').into(app)  // Incluindo os controllers dentro deste app

    return app
}