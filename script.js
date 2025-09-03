function operate(){
    const op1 = document.querySelector('#input1').value;
    console.log(`a = ${op1}`);
    const op2 = document.querySelector('#input2').value;
    console.log(`b = ${op2}`);
    const operation = document.querySelector('input[name="operation"]:checked').value;
    switch (operation) {
        case '+':
            const sum = Number(op1) + Number(op2);
            console.log(`a + b = ${sum}`)
            break;
        case '-':
            const diff = op1 - op2;
            console.log(`a - b = ${diff}`)
            break;
        case 'x':
            const prod = op1 *  op2;
            console.log(`a x b = ${prod}`)
            break;
        case '/':
            const quot = op1 /  op2;
            console.log(`a / b = ${quot}`)
            break;
        default:
            break;
    }
}