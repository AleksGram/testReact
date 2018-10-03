
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');

// App setup
app.use(morgan('combined')); //login incoming requests using for debugging
app.use(bodyParser.json({type: '*/*'}));
router(app);

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listen on: ', port);