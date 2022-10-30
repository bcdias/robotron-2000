import verificaOperacao from "./contadores/verificaOperacao.js";
import capturaContador from "./contadores/capturaContador.js";
import alteraContador from "./contadores/alteraContador.js";
import limparContador from "./contadores/limparContador.js";
import alteraEstatistica from "./estatisticas/alteraEstatistica.js";
import verificaPeca from "./estatisticas/verificaPeca.js"
import limparEstatisticas from "./estatisticas/limparEstatisticas.js";

// Percorrendo DOM
const controleAjuste = document.querySelectorAll('[data-ajuste]')
const restaurarDados = document.querySelector('[data-restaurar]')
const contadores = document.querySelectorAll('[data-contador]')
const estatisticas = document.querySelectorAll('[data-estatistica]')

// Limpa dados ao recaregar a página
limparContador(contadores)
limparEstatisticas(estatisticas)


// Botão restaura dados
restaurarDados.addEventListener('click', (evento) => {
    evento.preventDefault()
    limparContador(contadores)
    limparEstatisticas(estatisticas)
})


// Manipula contadores e estatísticas
controleAjuste.forEach(elemento => {
    elemento.addEventListener("click", (evento) => {

        // captura informação
        const operacao = verificaOperacao(evento)
        const contadorPeca = capturaContador(evento)
        const peca = verificaPeca(evento)

        // altera contadore e estatísticas
        alteraContador(operacao, contadorPeca)   
        alteraEstatistica(operacao, peca, estatisticas)          
    })
});



