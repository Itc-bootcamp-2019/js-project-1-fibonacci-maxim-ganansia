
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


// fetch("http://httpstat.us/500")
//     .then(function(response) {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response;
//     }).then(function(response) {
//         console.log("ok");
//     }).catch(function(error) {
//         console.log(error);
//     });