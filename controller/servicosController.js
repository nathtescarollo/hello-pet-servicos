const ServicosModel = require('../model/servicosModel');

const listaDeServicos = ServicosModel.listarTodosServicos();

const servicoController = {
    aplicarDesconto: function (taxa_desconto) {        
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