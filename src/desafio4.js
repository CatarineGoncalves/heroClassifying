class gameHero { 
    constructor(name, age, heroClass, level){
        this.name = name;
        this.age = age;
        this.heroClass = heroClass.toUpperCase();
        this.level = level;
    }

    classes() {
        let message;
        let imgUrl;

        if (this.heroClass === "MAGO") {
            message = `O Herói ${this.name} é um grande ${this.heroClass}, apesar da sua idade (${this.age} anos), tem um nível alto (${this.level}) em habilidade de magia do caos.`;
            imgUrl = (this.age > 40) 
                ? 'https://w7.pngwing.com/pngs/571/527/png-transparent-shaman-wizard-spell-magic-wand-wizard-cartoon-fictional-character-wizard.png' 
                : 'https://png.pngtree.com/png-clipart/20240416/original/pngtree-white-wizard-cartoon-character-png-image_14843939.png';
    
        } else if (this.heroClass === "GUERREIRO") {
            message = `O Herói ${this.name} é um grande ${this.heroClass}, apesar da sua idade (${this.age} anos), tem um nível alto (${this.level}) de força com sua espada de fogo.`;
            imgUrl = (this.age > 40) 
                ? 'https://img.freepik.com/vetores-gratis/menino-cavaleiro-dos-desenhos-animados-segurando-a-espada_1308-138575.jpg' 
                : 'https://img3.stockfresh.com/files/p/patrimonio/m/26/8517463_stock-vector-samurai-warrior-swordfight-stance-drawing.jpg';
       
        } else if (this.heroClass === "MONGE") {
            message = `O Herói ${this.name} é um grande ${this.heroClass}, apesar da sua idade (${this.age} anos), tem um nível alto (${this.level}) em artes marciais.`;
            imgUrl = (this.age > 40) 
                ? 'https://st2.depositphotos.com/3346395/10810/v/950/depositphotos_108107166-stock-illustration-buddha-little-monk-little-boy.jpg' 
                : 'https://st4.depositphotos.com/36027402/39374/v/1600/depositphotos_393740540-stock-illustration-colorful-vector-illustration-cartoon-elderly.jpg';

        } else if (this.heroClass === "LADINO") {
            message = `O Herói ${this.name} é um grande ${this.heroClass}, apesar da sua idade (${this.age} anos), tem um nível alto (${this.level}) em furtividade e com suas shurikens.`;
            imgUrl = (this.age > 40) 
                ? 'https://i.pinimg.com/236x/c5/c4/5b/c5c45b503c53faa3dddab0723c99fdde.jpg' 
                : 'https://i.pinimg.com/236x/a2/f8/97/a2f897e598e2909ec2c9e40e4c0a0f76.jpg';

        } else {
            message = `Infelizmente ${this.name}, essa classe ${this.heroClass} não é suportada nessa guilda! Tente outra cidade.` 
        }

        document.getElementById("hero-image").src = imgUrl;

        return message; 
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let nomeHeroi = prompt("Nome do Herói");
let classeHeroi = capitalize(prompt("Qual a sua classe? Mago, Monge, Guerreiro ou Ladino?"));
let idadeHeroi = parseInt(prompt("Qual sua idade?"));
let nivelHeroi = Math.floor(Math.random() * (250 - 50 + 1)) + 50; // Gera um nível entre 50 e 250

let heroOfBaldurs = new gameHero(nomeHeroi, idadeHeroi, classeHeroi, nivelHeroi);
let heroMessage = heroOfBaldurs.classes();

document.getElementById("hero-details").innerText = heroMessage;
