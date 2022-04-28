var array = [];

function palindromo(string){
    let j = 0;
    let tamanhoString = string.length;
    let primeiraLetra = string[0];
    let ultimaLetra = string[string.length];
    for(let i=string.length - 1; i >= 0; i--){
            let primeiraLetra = string[j];
            let ultimaLetra = string[i];
            if(primeiraLetra == ultimaLetra){
                array.push(1);
            }else{
                array.push(0);
            }
            j += 1;
    }
    if(array.every(item => item == 1)){
        console.log(string + " é um palíndromo");
    }else{
        console.log(string + " não é um palíndromo");
    }
}

palindromo("subi no onibus");