alert('Вы зашли в калькулятор');
const resultNum = document.getElementById('result');


const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const submitBt = document.getElementById('submit');
const plusBt = document.getElementById('plus');
const minusBt = document.getElementById('minus');
let act = '+';

minusBt.onclick = function(){
    act = '-';
}
plusBt.onclick = function(){
    act = '+';
}
function printColor(result){
    if(result<0){
        resultNum.style.color = 'red'
    }
    else {
        resultNum.style.color = 'green'
    }
}


submitBt.onclik = function() {
    if(act == '+'){
        const dev = Number (num1.value)+ Number(num2.value)
        printColor(dev);
        resultNum.textContent = dev;
        
    }
    else if(act == '-'){
        const dev = Number (num1.value) - Number(num2.value);
        printColor(dev);
        resultNum.textContent = dev2;
        
    }

}