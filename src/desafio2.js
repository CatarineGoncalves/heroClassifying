function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias <= 0) {
        nivel = 'Você não pode ser rankeado ainda.';
    } else if (saldoVitorias < 10 ) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else if (saldoVitorias >= 101) {
        nivel = 'Imortal';
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}


let vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
let derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

// Chama a função e armazena o resultado em uma variável
let resultado = calcularNivel(vitorias, derrotas);

// Exibe o resultado
console.log(resultado);
