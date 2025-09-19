function retornaNumeroVogais(texto){
    return texto.split('').filter(letra => 'aeiouAEIOU'.includes(letra)).length
}


const retornaNumeroVogaisArrow = (texto) => texto.split('').filter(letra => 'aAeEiIoOuU'.includes(letra)).length

console.log("Tradicional: "+retornaNumeroVogais("Exemplo de texto"))
console.log("Arrow: "+retornaNumeroVogaisArrow("Exemplo de texto"))
