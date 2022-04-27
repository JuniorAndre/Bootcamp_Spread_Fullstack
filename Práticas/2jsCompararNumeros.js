var compara = 0;

function juntarStrings(num1,num2){
   const primeirafrase = comparaNum(num1, num2);
   const segundafrase = comparaSoma(num1, num2);
   return primeirafrase + segundafrase;
}

function comparaNum(num1,num2){
    if(num1 == num2){
        compara++;
    }
    if(compara == 1){
    return ('Os números ' + num1 + ' e ' + num2 + ' são iguais. ');
    }else{
    return ('Os números ' + num1 + ' e ' + num2 + ' não são iguais. ');
    }
}

function comparaSoma(num1,num2){
    let soma = num1 + num2;
    let compara10 = 'menor';
    let compara20 = 'menor';
    if(soma > 10){
       compara10 = 'maior';
    }
    if(soma > 20){
       compara20 = 'maior';
    }
       return ('Sua soma é ' + soma + ', que é ' + compara10 + ' que 10 e ' + compara20 + ' que 20.');
}

console.log(juntarStrings(10,5));
