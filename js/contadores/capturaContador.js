function capturaContador(evento){
    const elementoPai = evento.target.parentNode
    const contador = elementoPai.querySelector("[data-contador]")
    return contador
}

export default capturaContador