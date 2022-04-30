const pessoa = {
    nome: Paulo,
    idade: 25,
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

calculaIdade.call(pessoa, 15);
