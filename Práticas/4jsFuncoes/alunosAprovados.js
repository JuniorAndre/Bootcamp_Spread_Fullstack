const alunos = new Object{
    Clara: 65, 
    Pedro: 50,
    Daniel: 89,
    Guto: 76,
}

function alunosAprovados(object, num){
    let num = 7;
    for(let i=0; i < object.length; i++){
        if(object.values(i) = num){
            console.log(object.keys(i) + ' foi aprovado!')
        }
    }

}

alunosAprovados(alunos, num);