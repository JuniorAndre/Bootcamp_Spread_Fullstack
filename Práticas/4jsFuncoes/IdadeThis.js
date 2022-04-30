const pessoa = {
    nome: 'Paulo',
    idade: 25,
}

const animal = {
    nome:'Thonzinho',
    idade: 3,
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

console.log(calculaIdade.call(pessoa, 15));
console.log(calculaIdade.apply(animal, [15]));
