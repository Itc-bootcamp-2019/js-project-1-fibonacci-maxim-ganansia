function callServer() {

    let number = document.getElementById("number").value;

    fetch('http://localhost:5050/fibonacci/' + number)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((response) => {
            document.getElementById("result").innerHTML = response.result;
        });
}

let mybutton = document.getElementById("mybtn");
mybutton.addEventListener("click", callServer);