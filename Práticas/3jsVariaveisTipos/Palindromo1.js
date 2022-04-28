var array = [];

function palindromo(string){
    let tamanhoString = string.length;
    let primeiraLetra = string[0];
    let ultimaLetra = string[string.length];
    for(let i=0; i < string.length; i++){
            let primeiraLetra = string[i];
            let ultimaLetra = string[j];
            if(primeiraLetra == ultimaLetra){
                array.push(1);
            }else{
                array.push(0);
            }
    }
    if(array.every(item => item == 1)){
        console.log(string + " é um palíndromo");
    }else{
        console.log(string + " não é um palíndromo");
    }
}

console.log(palindromo("ovo"));