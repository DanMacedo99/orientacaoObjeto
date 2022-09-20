import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";


const novoUser = new User('Danilo', 'dan@email.com', '30/03/1999')
//console.log(novoUser.exibirInfos())



const novoAdmin  = new Admin('Macedo', 'mac@email.com', '01/01/1998')
console.log(novoAdmin.nome)
novoAdmin.nome = ""
console.log(novoAdmin.nome)
console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso("Js", 20))

const novoDocente  = new Docente('Souza', 'sou@email.com', '01/01/1998')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaAluno("danilo", "Js"))