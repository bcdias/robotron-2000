function podeAlterarContador(operacao, pontosDiponiveis, contador){
    if (operacao == 'somar' && parseInt(pontosDiponiveis.value) == 0) {
        return false
    }
    if (operacao == 'subtrair' && parseInt(pontosDiponiveis.value) == 40) {
        return false
    }
    if (operacao == 'subtrair' && parseInt(pontosDiponiveis.value) == 0 ) {
        return false
    }
    if (operacao == 'subtrair' && parseInt(contador.value) == 0) {
        return false
    }

    return true
}

export default podeAlterarContador