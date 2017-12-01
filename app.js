var app = require('./config/express');
var porta = 3005;

app.get('/',function(req,res){
    res.render('index.html');
});

app.listen(porta,function() {
	console.log("Servidor Iniciado na porta: " + porta);
});