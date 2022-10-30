import pecas from "../../data/estatisticas.js";
import somar from "../operacoes/somar.js";
import subtrair from "../operacoes/subtrair.js";

function alteraEstatistica(operacao, peca, estatisticas) {

    estatisticas.forEach(element => {
        const pecaRobo = peca
        const atributo = element.dataset.estatistica
        const valorAtributo = parseInt(element.textContent)
        const bonus = pecas[pecaRobo][atributo]


        const somatorio = operacoes[operacao](valorAtributo, bonus)
        const novaEstatistica = element.textContent = somatorio

    });
}

const operacoes = {
    somar: somar,
    subtrair: subtrair
}

export default alteraEstatistica