
let mybutton = document.getElementById("mybtn");
mybutton.addEventListener("click", saveCalculation);

const result = document.getElementById("result")
const loader = document.getElementById("loader")
const numberError = document.getElementById("numberError")

const buttonClicked = document.getElementById("exampleCheck1");



// Checkbox
function saveCalculation() {
    let x = document.getElementById("number").value;
    let buttonClicked = document.getElementById("exampleCheck1");
    if (buttonClicked.checked) {
        callServer(x);
    } else {
        fibonacci(x);
    }
}


function fibonacci(x) {
    let a = 0;
    let b = 1;
    let result = 0;

    for (let i = 0; i < x; i++) {
        result = a + b;
        b = a;
        a = result;
    }
    document.getElementById("result").innerText = a;
}



function callServer() {
    loader.classList.remove("hidden");
    result.classList.remove("error");
    result.innerHTML = '';
    numberError.innerHTML = '';
    numberError.classList.add("hidden");

    const number = parseInt(document.getElementById("number").value);

    if (number > 50) {
        numberError.innerHTML = "can't be larger than 50";
        numberError.classList.remove("hidden");
        loader.classList.add("hidden");
    } else {
        fetch(`http://localhost:5050/fibonacci/${number}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                        .then(response => {
                            result.innerHTML = response.result;
                            getFibResults();
                        })
                } else {
                    return response.text()
                        .then(response => {
                            result.innerHTML = `Server Error: ${response}`;
                            result.classList.add("error");
                        })
                }
            })
        loader.classList.add("hidden");
    }
}



function getFibResults() {
    loader2.classList.remove("hidden");
    fetch(`http://localhost:5050/getFibonacciResults`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let sortedList = data.results.sort((a, b) => resultsSorted(a, b));
            let lastElementList = sortedList.pop();
            let dataList = document.getElementById("dataList");
            let date = new Date(lastElementList.createdDate);
            let liElement = document.createElement("li");
            liElement.innerHTML = `The Fibonacci of <b>${lastElementList.number}` +
                `</b> is <b>${lastElementList.result}` + `</b> Calculated at: ${date}`; 
            dataList.prepend(liElement);
            loader2.classList.add("hidden");
        });
}



function resultsSorted(a, b) {
    if (a.createdDate > b.createdDate) {
        return 1
    } else if (b.createdDate > a.createdDate) {
        return -1
    } else {
        return 0
    }
};