const user = {
    nome: "danilo",
    email: "Dan@email.com",
    nascimento: "30/03/1999",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = { 
		nome: "macedo",
    email: "mac@email.com",
    nascimento: "28/12/1997",
    role: "admin",
    ativo: true,
    criarCurso(){
        console.log("curso criado")
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
