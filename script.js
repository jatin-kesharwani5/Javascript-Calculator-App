let allNumber = document.querySelectorAll('.number-ope')
let input = document.querySelector('input')

let arr = Array.from(allNumber);

arr.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            input.value = eval(input.value);
        }
        else if (e.target.innerHTML == 'C') {
            input.value = '0'
        }
        else if (e.target.innerHTML == 'DEL') {
            input.value = input.value.slice(0, -1);
        }
        else {
            input.value += e.target.innerHTML;
        }
    })
});