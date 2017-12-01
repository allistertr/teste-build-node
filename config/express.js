let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let path = require('path');
let cors = require('cors');
let diretorioRaiz = path.join(__dirname, '..','app');

let app = express();




app.use(bodyParser.json());
app.use(expressValidator());

app.use(express.static('./public'));

// consign({cwd: diretorioRaiz})
//     .include('api')
//     .then('routes')
//     .into(app); 

module.exports = app;