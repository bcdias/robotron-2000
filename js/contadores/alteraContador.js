import somarAtributo from "./somarAtributo.js";
import subtrairAtributo from "./subtrairAtributo.js";

function alteraContador(operacao, contador){
    const valorCotador = parseInt(contador.value)
    const novoValor = operacoes[operacao](valorCotador)
    contador.value = novoValor
}

const operacoes = {

    somar: somarAtributo,
    subtrair: subtrairAtributo
}

export default alteraContador