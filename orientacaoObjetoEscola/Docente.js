import User from "./User.js"

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "Docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaAluno(aluno, curso){
        return `o aluno ${aluno} foi aprovado no curso de ${curso}!`
    }

}

