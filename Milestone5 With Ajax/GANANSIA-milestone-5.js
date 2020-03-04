function callServer() {
    let number = document.getElementById("number").value;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        let response = JSON.parse(this.response)
        document.getElementById("result").innerHTML = response.result;
    };
    xhttp.open("GET", 'http://localhost:5050/fibonacci/' + number, true);
    xhttp.send();
}
