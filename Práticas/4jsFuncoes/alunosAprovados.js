const alunos = [
    {
        Nome: Clara,
        Nota: 65,
        Turma: 1B,
    },
    {
        Nome: Pedro,
        Nota: 50,
        Turma: 1B,
    },
    {
        Nome: Daniel,
        Nota: 89,
        Turma: 2C,
    },
    {
        Nome: Guto,
        Nota: 76,
        Turma: 2C,
    }
]

function alunosAprovados(array, media){
    let aprovados = [];
    for(let i=0; i < array.length; i++){
        if(array[i] == media){
            console.log(array[i] + ' foi aprovado!')
            array.push(aprovados);
            console.log(aprovados);
        }
    }

}
num  = 7;
alunosAprovados(alunos, num);