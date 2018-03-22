var fs = require('fs');
var express = require('express');
var https=require('https');
var service=require('../js/service');
var routes=require('../js/router');
var path=require('path')
var bodyParser = require('body-parser');
var WebSocket = require('ws');
var web_pre=require('../js/web_presence');
//var PeerServer = require('../js/lib').PeerServer;

const app = express();

var options = {
    key: fs.readFileSync(path.join(__dirname, '../keys/key.pem'), 'utf8'),
    cert: fs.readFileSync(path.join(__dirname, '../keys/server.crt'), 'utf8'),
    passphrase: "divyank99"
};

/*var p_server = PeerServer({
    port: 9000,
    ssl: options
});*/
//app.use('/login',express.static(path.join(__dirname, '../login/dist')));
app.use(express.static(path.join(__dirname, '../vid-chat/dist')));
app.use('/assets',express.static(path.resolve(__dirname,'../')+'/assets'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use('/api',service);
app.use('/',routes);

const server=https.createServer(options,app);
const wss = new WebSocket.Server({server});

let wp=web_pre.configure(wss);

server.listen(9900,()=>{
    console.log('starting secure server on 9900');
});