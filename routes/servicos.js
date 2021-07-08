const express = require('express');
const router = express.Router();

const servicosController = require('../controller/ServicosController');
const adicionarServicoController = require('../controller/AdicionarServico');


/* GET /servicos page */
router.get('/', function(req, res, next) {
    const { taxa_desconto } = req.query; // ?taxa_desconto=10
    const servicos = servicosController.aplicarDesconto(taxa_desconto); 
    const temDesconto = taxa_desconto ? ("com desconto de " + taxa_desconto + "%") : "sem desconto";
    res.render('servicos', { servicos, temDesconto });
});  

/* POST /servicos page form */
router.post('/', function(req, res, next) {
    adicionarServicoController.adicionarServico(req.body);
    const taxaDesconto = req.query.taxa_desconto ? ('?taxa_desconto=' + req.query.taxa_desconto) : '';
    res.redirect('/servicos' + taxaDesconto);
});  

module.exports = router;
