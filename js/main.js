import verificaOperacao from "./contadores/verificaOperacao.js";
import capturaContador from "./contadores/capturaContador.js";
import alteraContador from "./contadores/alteraContador.js";
import limparContador from "./contadores/limparContador.js";

const controleAjuste = document.querySelectorAll('[data-ajuste]')
const restaurarContador = document.querySelector('[data-restaurar]')
const contadores = document.querySelectorAll('[data-contador]')



// Restaura pontos dos contadores
restaurarContador.addEventListener('click', (evento) => {
    evento.preventDefault()
    limparContador(contadores)
})


// Manipula pontos dos contadores
controleAjuste.forEach(elemento => {
    elemento.addEventListener("click", (evento) => {
        const operacao = verificaOperacao(evento)
        const contadorPeca = capturaContador(evento)
        alteraContador(operacao, contadorPeca)             
    })
});



