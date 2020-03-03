function fibonacci(x) {
    let a = 0;
    let b = 1;
    let result = 0;

    for (let i = 0; i < x; i++) {
        result = a + b;
        b = a;
        a = result;
    }
    document.getElementById("valX").innerText = x;
    document.getElementById("valY").innerText = result;
}

result = fibonacci(8);
