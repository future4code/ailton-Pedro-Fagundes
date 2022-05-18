//EXERCICIO 1
// let respostaUsuario = Number (prompt ("Quantos bichinhos de estimacao vc tem?"))
// let bichinhos = []

// if (respostaUsuario === 0){
//     console.log("Que pena! Voce pode adotar um pet")
// } else {
//     for(let i = 0; i < respostaUsuario; i++){
//         bichinhos.push(prompt ("Qual o nome do seu pet?"))
//     }
//     console.log(bichinhos)
// }

//EXERCICIO 2 A
const arrayOriginal =[21,7,3,5,47,23,13,18,29,33]
// for (let valor of arrayOriginal){
//     console.log(valor)
// }

//B
// for (let valor of arrayOriginal){
//     console.log(valor/10)
// }

//C
const numPar = () =>{
    let arrPar = []
    for (let i = 0; i < arrayOriginal.length; i++ ){
        if (arrayOriginal[i] %2 ===0){
    arrPar.push(arrayOriginal[i])
        }
    }
    console.log(arrPar)
}
numPar()

//D 





