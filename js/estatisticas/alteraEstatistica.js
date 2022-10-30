// import pecas from "../data/estatisticas.js";

function alteraEstatistica(operacao, pecas, peca, estatisticas) {
    estatisticas.forEach(element => {
        const pecaRobo = peca
        const atributo = element.dataset.estatistica
        const valorAtributo = parseInt(element.textContent)
        const bonus = pecas[pecaRobo][atributo]


        const mudaEstatistica = operacoes[operacao](valorAtributo, bonus)

        const novaEstatistica = element.textContent = mudaEstatistica

    });
}

const operacoes = {
    somar: somar,
    subtrair: subtrair
}

function somar(valorAtributo, bonus) {
    const novaEstatistica = valorAtributo + bonus
    return novaEstatistica
}

function subtrair(valorAtributo, bonus) {
    const novaEstatistica = valorAtributo - bonus
    return novaEstatistica
}
export default alteraEstatistica