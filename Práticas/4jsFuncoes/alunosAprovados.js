const alunos = [
    {
        Nome: 'Clara',
        Nota: 65,
        Turma: '1B',
    },
    {
        Nome: 'Pedro',
        Nota: 50,
        Turma: '1B',
    },
    {
        Nome: 'Daniel',
        Nota: 89,
        Turma: '2C',
    },
    {
        Nome: 'Guto',
        Nota: 76,
        Turma: '2C',
    }
]

function alunosAprovados(array, media){
    let aprovados = [];
    for(let i=0; i < array.length; i++){

        const {Nome, Nota} = array[i];
        if(Nota > media){
            console.log(Nome + ' foi aprovado!')
            aprovados.push(Nome);
            console.log(aprovados);
        }
    }

}

alunosAprovados(alunos, 70);