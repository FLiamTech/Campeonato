const express = require('express')
const app = express()
const port = 3000
const {mongoose} = require('./database')

//settings 
app.use(express.text()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(require('./src/routers/server.routes'));

function logger(req,res,next){
 console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl);
 next();
}

app.get('/camp', (req, res) => {
  res.send('Bienvenidos al Campeonato ADAUPS 2025!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})