const express = require('express');
const router = express.Router();

const servicosController = require('../controller/ServicosController');
const adicionarServicoController = require('../controller/AdicionarServico');


/* GET /servicos page */
router.get('/', function(req, res, next) {
    const servicos = servicosController.aplicarDesconto(req, res); 
    const temDesconto = (req.query.taxa_desconto) != undefined ? "com desconto de " + req.query.taxa_desconto + "%" : "sem desconto";
    res.render('servicos', { servicos, temDesconto });
});  

/* POST /servicos page form */
router.post('/', function(req, res, next) {
    adicionarServicoController.adicionarServico(req.body);
    const taxaDesconto = req.query.taxa_desconto ? ('?taxa_desconto=' + req.query.taxa_desconto) : '';
    res.redirect('/servicos' + taxaDesconto);
});  

module.exports = router;
