// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;
//      // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//
//
//

// EXERCICIO 1
// const respostaDoUsuario = prompt("Qual a sua idade?")
// const idadeUsuario = Number(respostaDoUsuario)
// if (respostaDoUsuario > 18) {
//     console.log("Voce pode dirigir")
// } else{
//     console.log("Voce nao pode dirigir")
// }

//
//

// EXERCICIO 2 
// const turnoUsuario = prompt("Digite a letra que representa seu turno M, V OU N")

// if (turnoUsuario === "V"){
// console.log("Boa tarde")
// } else {
//     if(turnoUsuario === "M"){
//         console.log("Bom dia")
//     } else {
//         if(turnoUsuario === "N"){
//             console.log("Boa noite")
//         }

//     }
// } 

// EXERCICIO 3
// const turnoUsuario = prompt("Digite a letra que representa seu turno M, V OU N")
// switch(turnoUsuario.toLocaleLowerCase()){
//     case `v`:
//     console.log(`Boa tarde`);
//     break
//     case `m`:
//     console.log(`Bom dia`);
//     break
//     case `n`:
//     console.log(`Boa noite`);
//     break
// }

//
//
//

// EXERCICIO 4
let generoFilme = prompt("Qual o genero do filme que vao assistir?") 
let precoIngresso = prompt("Qual o valor do ingresso?")
 const blabla = (filme, preco) => {
     if (filme === "fantasia" && preco < 15 ){
         console.log("Bom filme")
     } else {
         console.log("Escolha outro filme")
     }
 }
 blabla(generoFilme, precoIngresso)

  




