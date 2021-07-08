const ServicosModel = require('../model/servicosModel');

const listaDeServicos = ServicosModel.listarTodosServicos();

exports.adicionarServico = function (novoServico) {
    const { desc, preco } = novoServico;
    const idNovoServico = listaDeServicos.length + 1;

    ServicosModel.adicionarServico(idNovoServico, desc, preco);
}