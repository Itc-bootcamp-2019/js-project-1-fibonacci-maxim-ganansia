/////////////////////////////////J-S AVEC LOADER (DEBUT MILESTONE///////////////////////////////////////////////

let mybutton = document.getElementById("mybtn");
mybutton.addEventListener("click", callServer);


function callServer() {
    loader.style.visibility = "visible";
    let number = document.getElementById("number").value;
    

    fetch('http://localhost:5050/fibonacci/' + number)

        .then((response) => {
            return response.json();
        })

        .then(data => {
            console.log(document.getElementById("result"));
            document.getElementById("result").innerHTML = data.result;
            loader.style.visibility = "hidden";
        });
}


/////////////////////////////////////////AVEC ERREUR 404///////////////////////////////////////////////////////


let mybutton = document.getElementById("mybtn");
let numberError = document.getElementById("numberError")
mybutton.addEventListener("click", callServer);

function upto50() {
    numberError.style.visibility = "visible"
}

// function restart() {
//     loader.style.visibility = "hidden"
//     numberError.style.visibility = "hidden"
// }

function callServer() {
    loader.style.visibility = "visible";
    let number = document.getElementById("number").value;
    if (number > 50) {
        upto50();
    }
    else {

        fetch('http://localhost:5050/fibonacci/' + number)

            // restart()

            .then((response) => {
                if (response.status === 400) {
                    return response.text();
                }
                else {
                    return response.json();
                }
            })

            .then(data => {
                if (typeof data === "object") {
                    console.log(document.getElementById("result"));
                    document.getElementById("result").innerHTML = data.result;
                }
                else {
                    document.getElementById("result").innerText = "Server Error : " + data;
                }
                loader.style.visibility = "hidden";
            });
    }
}


//////////////////////////////// EXEMPLE CATCH ////////////////////////////////////////////////

fetch("http://httpstat.us/500")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    });

//////////////////////////////// test Avec sacha ////////////////////////////////////////////////

let mybutton = document.getElementById("mybtn");
mybutton.addEventListener("click", callServer);


function callServer() {
    loader.style.visibility = "visible";
    let number = document.getElementById("number").value;


    fetch('http://localhost:5050/fibonacci/' + number)
        .then((response) => {
            if (!response.ok) {
                return response.text();
            }
            return response.json();
        }).then((response) => {
            document.getElementById("result").innerHTML = response.result;
            loader.style.visibility = "hidden";
        })

        .catch(error => {
            document.getElementById("result").innerHTML = error;
        })
}


////////////////////////// FETCH + CATCH /////////////////////////////////////////


let mybutton = document.getElementById("mybtn");
mybutton.addEventListener("click", callServer);

const result = document.getElementById("result")
const loader = document.getElementById("loader")
const numberError = document.getElementById("numberError")



function callServer() {
    loader.classList.remove("hidden");
    result.classList.remove("error");
    result.innerHTML = '';
    numberError.innerHTML = '';
    numberError.classList.add("hidden");

    const number = Number(document.getElementById("number").value);

    if (number > 50) {
        numberError.innerHTML = "The number cant be higher than 50";
        numberError.classList.remove("hidden");
        loader.classList.add("hidden");
    } else {
        fetch(`http://localhost:5050/fibonacci/${number}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }

                return response.text()
            })
            .then(response => {
                if (typeof response === "object") {
                    result.innerHTML = response.result;
                } else {
                    result.innerHTML = `Server Error: ${response}`;
                    result.classList.add("error");
                }
                loader.classList.add("hidden");
            })
            .catch(e => {
                console.error(e);
            })

    }

}