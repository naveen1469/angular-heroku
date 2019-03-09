
//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const proxy = require('express-http-proxy');


app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/product-viewer'));

// Set our api routes proxy to point to spring boot server
app.use('/server', proxy('https://spring-boot-product.herokuapp.com'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/product-viewer/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
