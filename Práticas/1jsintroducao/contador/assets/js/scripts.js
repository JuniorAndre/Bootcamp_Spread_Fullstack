let count = 0;

const CURRENT_NUM = document.getElementById('currentNumber');

function increment() {
    count ++;
    CURRENT_NUM.innerHTML = count;
}

function decrement() {
    count --;
    CURRENT_NUM.innerHTML = count;
}

add.addEventListener('click', increment());