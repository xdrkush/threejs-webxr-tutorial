/*
 * Server
 * ****** */

// Import Module
const express = require('express'),
    https = require('https'),
    fs = require('fs'),
    dotenv = require('dotenv'),
    path = require('path'),
    app = express();

// Variable environement (.env)
dotenv.config();
const { PORT } = process.env;
// File static
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

// Run
const server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app);
server.listen(PORT, () => { console.log(`listening on ${ PORT }`) });
