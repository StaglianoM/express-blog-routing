const express = require('express');
const posts = require('./routers/posts'); //collegamento a posts con routers

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home Blog');
});

// Rotta per ottenere tutti i post
app.get('/posts', function (req, res) {
    res.send('Lista');
});

// show
app.get('/posts/:id', function (req, res) {
    res.send('Dettagli ' + req.params.id);
});

// store
app.post('/posts', function (req, res) {
    res.send('Creazione');
});

// update
app.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale ' + req.params.id);
});

// modify
app.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale ' + req.params.id);
});

// destroy
app.delete('/posts/:id', function (req, res) {
    res.send('Eliminazione ' + req.params.id);
});

// Avvio il server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});



