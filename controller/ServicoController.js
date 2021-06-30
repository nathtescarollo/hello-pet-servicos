const ServicoModel = require('../model/servicosModel');

const ServicoController = {
    aplicarDesconto: function (req, res) {
        const { taxa_desconto } = req.query; // ?taxa_desconto=10
        
        let listaDeServicos = ServicoModel.listarTodosServicos();

        if (taxa_desconto) {
            listaDeServicos.map(servico => {
                servico.preco = servico.preco * ((100 - taxa_desconto)/100);
                return servico;
            });
        }
        return listaDeServicos;
    }
};

module.exports = ServicoController;