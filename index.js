/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn('Atenção')
console.table([{
    nome: 'Samuel',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: 'Lucas',
    turma: '02',
    disciplina: 'Prog JS'
}])

/*
Concatenação: junta strings com +.
Ex: "Olá, " + nome

Interpolação: insere variáveis direto na string com template literals (crase `). Ex: `` Olá, ${nome}` ``

Ambas produzem o mesmo resultado, mas interpolação é mais legível.
*/ 


const numeroAula = "03"
const turma = "02"
let data = "05 de abril"


console.log("Aula 03 da turma " + turma + " no sábado dia 05 de abril")

console.log(`Aula ${ numeroAula} da Turma ${ turma } no Sábado dia ${data}`)

console.log(data.length)

const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ")

console.log(nomesDeAlunosSplit)

//Verifica se existe dentro da string

console.log("Includes: "+nomesDeAlunos.includes("André"))

console.log("Replace All: "+nomesDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "       inteiro real cadeira de caracteres...    "

console.log("Trim: "+conceitosLogica.trim())


