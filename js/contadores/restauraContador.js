function restauraContador(contadores){
    contadores.forEach(contador => {
        contador.value = 0
    })
}

export default restauraContador