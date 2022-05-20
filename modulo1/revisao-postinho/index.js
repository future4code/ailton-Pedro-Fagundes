
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de igualdade ${a} === ${b} é ${a === b}`
}
console.log(checarIgualdade(1, 2))

// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a,b){
    return `No comparador de maior ${a} > ${b} é ${a > b}`
}
console.log(verificaSeEMaior(321, 340))


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=false
// b-) 1=='1'= false
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= false


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = (nomeDoUsuario, anoDeNascimento, senhaDoUsuario, 
    nacionalidaeUsuario) => {
    const usuario = []

    //  Sua lógica aqui
const nome= prompt("Qual o seu nome?")
const anoNascimento= prompt("Em que ano voce nasceu?")
const senha= prompt ("Qual a sua senha?")
const nacionalidae = prompt("Qual a sua nacionalidade?")
if (anoNascimento <=2004){
    usuario.push(anoNascimento)
} else{
console.log("Voce precisa ter no minimo 18 anos para se cadastrar")
} 
if (nacionalidae === 'brasileiro'){
    usuario.push(nacionalidae)
} else{
 console.log("Voce precisa ser brasileiro para se cadastrar")
}
if (senha.length >= 6){
    usuario.push(senha)

} else{
    console.log("Sua senha tem que ter no minimo 6 digitios")
}
}
cadastro()

// console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//  const senhaUsuario = prompt("Digite sua senha")
//  if (login === senhaUsuario){
//      console.log("Usuario logado")
//  } else {
//      console.log("senha invalida")
//  }
// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {
//  //  Sua lógica aqui
// const nome = prompt("Qual o seu nome?")
// const vacinaQueTomou= prompt ("Qual vacina voce tomou?")

// }
// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());