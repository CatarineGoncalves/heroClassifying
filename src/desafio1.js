// Função para exibir informações do herói
function displayHeroInfo(ranking, nome, xp, classe, poderMagico, randomWeapon) {
    alert('Seu ranking é ' + ranking);
    console.log('Nome do herói: ' + nome);
    console.log('Avaliação de Força: ' + xp);
    console.log('Classe: ' + classe);
    console.log('Poder Mágico: ' + poderMagico);
    console.log('Arma: ' + randomWeapon);

    if (poderMagico <= 400) {
        console.log('Categoria: Arqueiro');
    } else if (poderMagico => 401 && 900 <= poderMagico ) {
        console.log('Categoria: Guerreiro');
    } else if (poderMagico => 901 && 1500 <= poderMagico ) {
        console.log('Categoria: Mago');
    }
}

let heroName;
let heroXP = Math.floor(Math.random() * 10000) + 1;
let magicPower = Math.floor(Math.random() * 5000) + 1;
let Weapons = ['Cajado', 'Arco e Flecha', 'Espada', 'Escudo', 'Martelo Gigante'];


let length = Weapons.length;
let randomIndex = Math.floor(Math.random() * length);
let randomWeapon = Weapons[randomIndex];



heroName = prompt('Digite o nome do herói');

if (heroXP <= 1000) {
    displayHeroInfo('Ferro', heroName, heroXP, 'Ferro', magicPower, randomWeapon);
} else if (heroXP >= 1001 && heroXP <= 2000) {
    displayHeroInfo('Bronze', heroName, heroXP, 'Bronze', magicPower, randomWeapon);
} else if (heroXP >= 2001 && heroXP <= 5000) {
    displayHeroInfo('Prata', heroName, heroXP, 'Prata', magicPower, randomWeapon);
} else if (heroXP >= 5001 && heroXP <= 8000) {
    displayHeroInfo('Ouro', heroName, heroXP, 'Ouro', magicPower, randomWeapon);
} else if (heroXP >= 8001 && heroXP <= 9000) {
    displayHeroInfo('Diamante', heroName, heroXP, 'Diamante', magicPower, randomWeapon);
} else if (heroXP >= 9001) {
    displayHeroInfo('Mestre', heroName, heroXP, 'Mestre', magicPower, randomWeapon);
} else {
    // Nenhuma ação necessária para outros valores de XP
}
