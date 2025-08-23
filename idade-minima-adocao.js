var idadeMinimaAdocao = 2;
var idadeDog = 1;
var nomeDog = "Rex";
var porteDog = 1;

console.log(
  idadeDog >= idadeMinimaAdocao
    ? `Parabéns! O ${nomeDog} está apto para ser adotado!`
    : porteDog === 0
      ? `Parabéns! O ${nomeDog} está apto para ser adotado pelo porte!`
      : `Infelizmente, o ${nomeDog} não está apto para adoção :(`
)

function verificarSePodeAdotar(idadeDog, porteDog){
    console.log(idadeDog >= idadeMinimaAdocao || porteDog === 0
        ? `Sim`
        : `Não`
    )
}

verificarSePodeAdotar(1,1)
verificarSePodeAdotar(2,1)
verificarSePodeAdotar(2,0)
verificarSePodeAdotar(1,0)