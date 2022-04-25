let count = 0;

const CURRENT_NUM = document.getElementById('currentNumber');
const add = document.getElementsByName('adicionar');


function increment() {
    count ++;
    CURRENT_NUM.innerHTML = count;
}

function decrement() {
    count --;
    CURRENT_NUM.innerHTML = count;
}

add.addEventListener('click', increment());