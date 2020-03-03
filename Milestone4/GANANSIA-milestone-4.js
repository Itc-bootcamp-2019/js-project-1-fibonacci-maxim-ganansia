function numberFibonnaci() {
    let number = document.getElementById("number").value;
    let result = fibonacci(number);
    document.getElementById("result").innerText = result;
}

function fibonacci(x) {
    let a = 0;
    let b = 1;
    let result = 1;

    for (let i = 0; i < x; i++) {
        result = a + b;
        b = a;
        a = result
    }
    return result;
}

