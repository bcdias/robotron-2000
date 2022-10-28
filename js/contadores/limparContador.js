function limparContador(contadores){
    contadores.forEach(contador => {
        contador.value = 0
    })
}

export default limparContador