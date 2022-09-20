import User from "./User.js"

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    nomeAdmin(){
        return `${this.nome}`
    }
    criarCurso(curso, vagas){
        return `foi aberto inscricoes para curso de ${curso} com ${vagas} vagas.`
    }
}

