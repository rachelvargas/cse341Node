const routes = require('express').Router();
routes.get('/', (req, res) => {
    res.send('Rachel Vargas')
});
module.exports = routes