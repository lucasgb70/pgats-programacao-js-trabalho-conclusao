const infoDog = {
    nomeDog: "Pantera",
    porteDog: "Médio",
    tempoDisponivelMinutos: 45
}

const definirPlanoAtividades = (infoDog) => {
    let atividadeDog = "";
    if (infoDog.porteDog === "Pequeno"){
        atividadeDog = "Brincar dentro de casa"
    }else if(infoDog.porteDog === "Médio"){
        atividadeDog = "Caminhada no quarteirão"
    }else if(infoDog.porteDog === "Grande"){
        atividadeDog = "Correr no parque"
    }else{
        atividadeDog = "Porte inválido"
        return atividadeDog;
    }


    if (infoDog.tempoDisponivelMinutos < 15) {
        console.log("Atividade rápida: " + atividadeDog)
    } else if (infoDog.tempoDisponivelMinutos >+ 15 && infoDog.tempoDisponivelMinutos <= 30) {
        console.log("Tempo ideal: "+ atividadeDog)
    }else if (infoDog.tempoDisponivelMinutos > 30) {
        console.log("Hora da diversão: "+ atividadeDog)
    }
}

definirPlanoAtividades(infoDog)