const alunos = {
    Clara: 65, 
    Pedro: 50,
    Daniel: 89,
    Guto: 76,
}

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