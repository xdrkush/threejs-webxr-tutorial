const static = require('node-static');
const https = require('https');
const fs = require('fs');

const port = 3000;
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const file = new (static.Server)();

https.createServer(options, function (req, res) {
    req.addListener('end', function () {
        file.serve(req, res);
    }).resume();
}).listen(port);
