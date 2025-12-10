//Função 1 - Gerador de Tags de Identificação (To Upper case)
export function geradorDeTagsDeIdentificacao(nome){
    return nome.toUpperCase()
}

///Função 2 - Verificar se pode ser adotado
export function verificarSePodeSerAdotado(idadeDog, porteDog){
    porteDog = porteDog.toUpperCase();
    if(idadeDog == 1 && porteDog === 'M'){
        return true;
    }
}

//Função 3 - Calcular Consumo de Ração por peso do Dog
export function calcularConsumoDeRacao(nomeDog, idadeDog, pesoDog){
    return pesoDog * 300;
}

//Função 4 - Decidir Tipo de Atividade por Porte
export function decidirTipoDeAtividadePorPorte(porte){
    porte = porte.toLowerCase();
    const recomendacaoAtividade = {
        'pequeno': 'brincar dentro de casa',
        'medio': 'passeios curtos',
        'grande': 'exercícios ao ar livre'   
    };

    return recomendacaoAtividade[porte] || 'Desculpe, porte desconhecido';
}

//Função 5 - Buscar Dado de forma assíncrona
export async function buscarDadoAsync(){
    return 'Pipoca';
}

