const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/Campeonato';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('BD conectada localmente'))
.catch(err => console.error('Error de conexión:', err));

module.exports = mongoose;
