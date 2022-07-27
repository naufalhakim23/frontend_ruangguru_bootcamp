//handle when the number is pressed. It renders the number into #input element
let numeric = ''
function number(number) {
    // TODO: answer here
    numeric += number;
    console.log(number);
    console.log(numeric);
    document.getElementById('input').setAttribute('value', numeric);
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    let input = document.getElementById('input');
    if (operator == 'Del') {
        // TODO: answer here
        let numeric2 = ''
        for(let i = 0; i < numeric.length - 1; i++){
            // console.log(numeric[i])
            numeric2 += numeric[i]
            // console.log(numeric2)
        }
        numeric = numeric2
        console.log(numeric)
        document.getElementById('input').setAttribute('value', numeric);
    } else if (operator == "AC") {
        // TODO: answer here
        numeric = ''
        document.getElementById('input').setAttribute('value', numeric);
        console.log(numeric)
    } else {
        // TODO: answer here
        numeric += operator
        console.log(numeric)
        document.getElementById('input').setAttribute('value', numeric);
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    // console.log(numeric)
    let result = eval(numeric)
    // console.log(result)
    document.getElementById('input').setAttribute('value', result);
}