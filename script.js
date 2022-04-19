let screen = document.getElementById('screen')
button = document.querySelectorAll('button');
let screenVal = ''
for (let item of button) {

    item.addEventListener('click', (e) => {
        buttonTxt = e.target.innerText;
        if (buttonTxt == 'X') {
            buttonTxt = '*';
            screenVal += buttonTxt;
            screen.value = screenVal
        }
        else if (buttonTxt == 'C') {
            screenVal = ''
            screen.value = screenVal;
        }
        else if (buttonTxt == '=') {
            screen.value = eval(screenVal)
        }
        else if (buttonTxt == 'B') {
            var number = screen.value;
            var len = number.length - 1;
            var newnumber = number.substring(0, len);
            screen.value = newnumber;
        }
        else {
            screenVal += buttonTxt;
            screen.value = screenVal;
        }
    })
}