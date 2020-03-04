function callServer() {

    let number = document.getElementById("number").value;

    fetch('http://localhost:5050/fibonacci/' + number)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(document.getElementById("result"));
            document.getElementById("result").innerHTML = data.result;
        });

}