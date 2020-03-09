// function numberFibonnaci() {
//     let number = document.getElementById("number").value;
//     let result = fibonacci(number);
//     document.getElementById("result").innerText = result;
// }


// Milestone 4

// function handleZeroValue(x) {
//     if (x === 0) {
//         document.getElementById("result").innerHTML = "0";
//         return true
//     }
// }

// function fibonacci() {
//     let xString = document.getElementById("number").value;
//     let x = parseInt(xString)

//     let valueIsZero = handleZeroValue(x)
//     if (!valueIsZero) {
//         let a = 0;
//         let b = 1;
//         let result = 1;

//         for (let i = 0; i < x; i++) {
//             result = a + b;
//             b = a;
//             a = result
//         }
//         document.getElementById("result").innerHTML = result;
//     }
// }

// const mybtn = document.getElementById("mybtn")
// mybtn.addEventListener("click", fibonacci);



// Milestone 4.1 Recursion

function myRecursion(number) {

    if (number == 1) {
        return 1;
    } else if (number == 0) {
        return 0;
    } else {
        return myRecursion(number - 1) + myRecursion(number - 2);
    }
}

// const input = document.getElementById(result)

const mybtn = document.getElementById("mybtn")
mybtn.addEventListener("click", myRecursion);
