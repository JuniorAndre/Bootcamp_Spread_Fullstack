const pessoa = {
    nome: 'Paulo',
    idade: 26,
}

const animal = {
    nome:'Thonzinho',
    idade: 2,
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

console.log(calculaIdade.call(pessoa, 6));
console.log(calculaIdade.apply(animal, [6]));
