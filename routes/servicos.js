const express = require('express');
const router = express.Router();

const servicosController = require('../controller/ServicoController');

/* GET /servicos page. */
router.get('/', function(req, res, next) {
    const servicos = servicosController.aplicarDesconto(req, res); 
    const temDesconto = (req.query.taxa_desconto) != undefined ? "com desconto" : "sem desconto";
    res.render('servicos', { servicos, temDesconto });
});  

module.exports = router;
