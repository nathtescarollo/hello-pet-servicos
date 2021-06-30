const ServicoModel = require('../model/servicosModel');

const ServicoController = {
    aplicarDesconto: function (req, res) {
        const { taxa_desconto } = req.query; // ?taxa_desconto=10
        const listaServicos = ServicoModel;

        if (taxa_desconto) {
            listaServicos.map(servico => {
                servico.preco = servico.preco * ((100 - taxa_desconto)/100);
                return servico;
            });
        }
        return listaServicos;
    }
};

module.exports = ServicoController;