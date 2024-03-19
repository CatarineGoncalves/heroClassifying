//começando o projeto de um jogo em JS
class gameHero { 
    // Indicando no Construtor todas as variaveis que eu desejo ter no meu código
    constructor(name, age, heroClass, level){
        
        // definindo que o this de uma forma mais simples para ser chamado durante o progesso do codigo
        this.name = name
        this.age = age
        this.heroClass = heroClass
        this.level = level
    }

    classes() {
        if(this.heroClass === "Mago") {
            console.log(`o Heroi ${this.name} é um grande ${this.heroClass}, apesar da sua idade (${this.age} anos), tem um nível alto (${this.level}) em habilidade de magia do caos`)
        } else if (this.heroClass === "Guerreiro") {
            console.log(`o Heroi ${this.name} é um grande ${this.heroClass}, apesar da sua idade (${this.age} anos), tem um nível alto (${this.level}) de força com sua espada de fogo`)
        } else if (this.heroClass === "Monge") {
            console.log(`o Heroi ${this.name} é um grande ${this.heroClass}, apesar da sua idade (${this.age} anos), tem um nível alto (${this.level}) em artes marciais`)
        } else {
            console.log(`o Heroi ${this.name} é um grande ${this.heroClass}, apesar da sua idade (${this.age} anos), tem um nível alto (${this.level}) em furtividade e com suas shurikens`)

        }
    }

}

let nomeHeroi = prompt("Nome do Heroi")
let classeHeroi = prompt("Qual a sua classe? Mago, Monge, Guerreiro ou Ninja?")
let idadeHeroi = parseInt(prompt("Qual sua idade?"))
let nivelHeroi = Math.floor(Math.random() * (250 - 50 + 1)) + 50; // Gera um nível entre 50 e 250

let heroOfBaldurs = new gameHero(nomeHeroi, idadeHeroi, classeHeroi, nivelHeroi)
heroOfBaldurs.classes()