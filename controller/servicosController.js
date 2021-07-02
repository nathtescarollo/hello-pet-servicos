const servicosModel = require('../model/servicosModel');

let listaDeServicos = servicosModel.listarTodosServicos();

const servicoController = {
    aplicarDesconto: function (req, res) {
        const { taxa_desconto } = req.query; // ?taxa_desconto=10
        
        if (taxa_desconto) {
            listaDeServicos.map(servico => {
                servico.preco *= (100 - taxa_desconto) / 100;
                return servico;
            });
        }
        return listaDeServicos;
    }
};

module.exports = servicoController;