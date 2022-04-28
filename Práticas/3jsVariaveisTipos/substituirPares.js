let myArray = [1, 3, 4, 6, 80, 33, 23, 90];

function trocarPares(array){
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 == 0){
            array[i] = 0
        }
    }
    if(array.length == 0){
        return console.log(-1);
    }else{
        console.log(array)
    }
}

trocarPares(myArray);