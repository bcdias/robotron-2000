function restauraEstatisticas(estatisticas){

    estatisticas.forEach(elemento => {
        elemento.textContent = 0
    });
}

export default restauraEstatisticas