import somar from "../operacoes/somar.js";
import subtrair from "../operacoes/subtrair.js";

function alteraContador(operacao, contador){
    const valorCotador = parseInt(contador.value)
    const novoValor = operacoes[operacao](valorCotador, 1)
    const contadorAlterado = contador.value = novoValor
}

const operacoes = {

    somar: somar,
    subtrair: subtrair
}

export default alteraContador