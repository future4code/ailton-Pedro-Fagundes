// const emailUsuario = prompt("Qual o seu email?")
// const nomeUsuario = prompt("Qual seu nome?")

// console.log(`o e-mail`, emailUsuario, `foi cadastrado com sucesso. Seja 
// bem vinda(o),`, nomeUsuario)

//
//
//

// const comidasFav = ["Hamburguer", "Petit Gateau", "Pizza", "Acai", 
// "Chocolate"]
// // console.log(comidasFav)
// console.log(`Minhas comidas favoritas sao:  
// Hamburguer
// Petit Gateau
// Pizza
// Acai
// Chocolate`)  



// const comidaFavUsuario = prompt("Qual sua comida favorita?")
// console.log(comidasFav)
// comidasFav.splice(1,1, "Japones")
// console.log(comidasFav)

//
//
//

const listaDeTarefas = []
const tarefa1 = prompt("Liste a tarefa do dia")
const tarefa2 = prompt("Liste a tarefa do dia ")
const tarefa3 = prompt("Liste a tarefa do dia")
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

const respostaUsuario = prompt(`Qual opcao ja realizou?
0 = ${listaDeTarefas[0]}
1= ${listaDeTarefas[1]}
2= ${listaDeTarefas[2]}`
)
console.log(respostaUsuario)

listaDeTarefas.splice(2,1)

console.log(listaDeTarefas)



