import verificaOperacao from "./verificacoe/verificaOperacao.js";
import capturaContador from "./contadores/capturaContador.js";
import alteraContador from "./contadores/alteraContador.js";
import restauraContador from "./contadores/restauraContador.js";
import alteraEstatistica from "./estatisticas/alteraEstatistica.js";
import verificaPeca from "./estatisticas/verificaPeca.js"
import restauraEstatisticas from "./estatisticas/restauraEstatisticas.js";
import alteraPontosDisponieis from "./contadores/alteraPontosDisponiveis.js";
import resetaPontosDisponiveis from "./contadores/restauraPontosDisponiveis.js";
import podeAlterarContador from "./verificacoe/podeAlterarContador.js";

// Percorrendo DOM
const controleAjuste = document.querySelectorAll('[data-ajuste]')
const restaurarDados = document.querySelector('[data-restaurar]')
const contadores = document.querySelectorAll('[data-contador]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pontosDiponiveis = document.querySelector('[data-pontos]')


// Restaurar dados ao recarregar a página
restauraContador(contadores)
restauraEstatisticas(estatisticas)
resetaPontosDisponiveis(pontosDiponiveis)


// Botão restaura dados
restaurarDados.addEventListener('click', (evento) => {
    evento.preventDefault()
    restauraContador(contadores)
    restauraEstatisticas(estatisticas)
    resetaPontosDisponiveis(pontosDiponiveis)
})


// Manipula contadores e estatísticas
controleAjuste.forEach(elemento => {
    elemento.addEventListener("click", (evento) => {

        // captura dados
        const operacao = verificaOperacao(evento)
        const contador = capturaContador(evento)
        const peca = verificaPeca(evento)

        // Verifica disponibilidade de pontos
        const ehAlterarContador = podeAlterarContador(operacao ,pontosDiponiveis, contador)

        // altera contadores e estatísticas
        if(ehAlterarContador){
            alteraPontosDisponieis(operacao, pontosDiponiveis)
            alteraContador(operacao, contador)
            alteraEstatistica(operacao, peca, estatisticas)
        }
    })
});



