function alteraPontosDisponieis(operacao, pontosDisponíveis){
    if(operacao == 'somar'){
        pontosDisponíveis.value = parseInt(pontosDisponíveis.value) - 1
    }else{
       pontosDisponíveis.value = parseInt(pontosDisponíveis.value) + 1
    }
}

export default alteraPontosDisponieis