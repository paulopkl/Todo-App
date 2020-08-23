const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true })); // Aceita o padrão de formulários URLencoded
server.use(bodyParser.json()); // Coverte para JSON
server.use(allowCors);

server.get('/:id', (req, res) => {
    const query = req.params;
    console.log(query);
    res.status(200).json({ message: 'Pegou o default' });
});

const porta = 3003;
server.listen(porta, () => { console.log(`Servidor rodando na porta ${porta}`) });

module.exports = server;