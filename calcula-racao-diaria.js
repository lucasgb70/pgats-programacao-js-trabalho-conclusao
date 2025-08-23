var pesoKg = 10
var estoqueGramas = 5000
var nomeDog = "Rex"
var racaoPorDia = pesoKg * 30

console.log("Nome do cachorro: " + nomeDog)
console.log("Ração recomendada por dia: " + racaoPorDia + " gramas")
console.log("Peso do cachorro: " + pesoKg + " kg")
console.log("Estoque de ração irá durar: " + Math.floor(estoqueGramas/racaoPorDia) + " dias")


//-----------------------------------------------
nomeDog = "Joselito"
pesoKg = 18
racaoPorDia = pesoKg * 30

console.log(`Nome do cachorro: ${nomeDog}`)
console.log(`Ração recomendada por dia: ${racaoPorDia} gramas`)
console.log(`Peso do cachorro: ${pesoKg} kg`)
console.log(`Estoque de ração irá durar: ${Math.floor(estoqueGramas/racaoPorDia)} dias`)
