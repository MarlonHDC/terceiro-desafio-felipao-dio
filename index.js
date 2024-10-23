class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }          

    atacar(){    
        let ataque    
        
        if(this.tipo === "mago"){
            ataque = "magia"
        } else if ( this.tipo === "guerreiro"){
            ataque = "espada"
        } else if (this.tipo === "monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        }      
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`)        
    }
}

let ninja = new hero ("Dev May Cry", 20, "ninja")
let guerreiro = new hero ("Kratos Dev", 32, "guerreiro")
let mago = new hero ("Gandaldev Senior", 2000, "mago")

mago.atacar()
guerreiro.atacar()
ninja.atacar()