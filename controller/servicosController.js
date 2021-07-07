const ServicosModel = require('../model/servicosModel');

let listaDeServicos = ServicosModel.listarTodosServicos();

const servicoController = {
    aplicarDesconto: function (req, res) {
        const { taxa_desconto } = req.query; // ?taxa_desconto=10
        
        if (taxa_desconto) {
            return listaDeServicos.map(servico => {
                const resultado = {
                    ...servico,
                };
                resultado.preco *= (100 - taxa_desconto) / 100;
                return resultado;
            });
        }
        
        return listaDeServicos;
    }
};

module.exports = servicoController;