
let numero1= Number(prompt("Insira um numero"))
let numero2 = Number(prompt("Insira um numero"))




const comparaNumeros = (num1, num2) => {
if (num1 === num2){
    console.log("Sao iguais")
} else if (num1 > num2){
    console.log("num1 e maior que num2")
} else if (num1 < num2){
    console.log("num1 e menor que num2")
} else {
    console.log("deu ruim")
}
}
comparaNumeros(numero1, numero2)

//
//
//

let paisDeOrigem = prompt("Qual o seu pais?")

switch(paisDeOrigem.toLocaleLowerCase()) {
    case `brasil`:
        console.log("Brasileira")
        break
    case `eua`:
        console.log("norte americana")
        break
    case `argentina`:
        console.log("Argentina")
        break
    default:
        console.log("pais nao identificado")        
}


const pokemonInicial = prompt("Qual o seu pokemon inicial?")


const retornaTipoDoPokemon = (pokemon) => {
switch (pokemon){
    case `bulbasaur`:
        return `${pokemon} e do tipo planta/veneno`;
    case `Squirtle`:
        return `${pokemon} e do tipo agua`
    case `Charmander`:
        return `${pokemon} e do tipo fogo`

}

}

let maiorDeIdade = confirm("Voce e maior de idade?")
let ensinoMedioCompleto = confirm("Voce tem ensino medio completo?")
let estuda = confirm("Voce faz alguma outra faculdade?")


const podeEstudar =(maiorDeIdade, ensinoMedioCompleto, naoEstuda) =>{
    if (maiorDeIdade && ensinoMedioCompleto && !naoEstuda){
        console.log("Boas vindas a faculdade!")
    } else{
        console.log("Voce nao pode estudar aqui")
    }

}
podeEstudar(maiorDeIdade, ensinoMedioCompleto, estuda)