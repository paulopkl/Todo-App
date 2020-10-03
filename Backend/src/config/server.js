const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true })); // Accept the default of forms URLencoded
server.use(bodyParser.json()); // Coverts to JSON
server.use(allowCors);

server.get('/:id', (req, res) => {
    const query = req.params;
    console.log(query);
    res.status(200).json({ message: 'catch default' });
});

const porta = 3003;
server.listen(porta, () => { console.log(`Server running in door ${porta}`) });

module.exports = server;