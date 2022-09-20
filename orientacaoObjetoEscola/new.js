// function User(nome, email){
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function(){
//         return `${this.nome}, ${this.email}`
//     }
// }

// // const novoUser = new User("danilo", "dan@email.com")
// // console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'macedo', 'mac@email.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')

// console.log(novoUser)

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('danilo', 'dan@email.com')
console.log(novoUser)
console.log(user.isPrototypeOf(novoUser))