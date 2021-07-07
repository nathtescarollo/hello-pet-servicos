const servicosDados = require('../database/servicos.json');

exports.listarTodosServicos = function () {
    /*
        realiza algum tipo de processamento...    
    */
    return servicosDados;
}; 

exports.adicionarServico = function (id, desc, preco) {
    preco = parseFloat(preco);
    servicosDados.push( { id, desc, preco } );
    console.log(servicosDados);
};