const mybtn = document.getElementById("mybtn")
mybtn.addEventListener("click", fibonacci);
 
function myRecursion(number){
    let xString = document.getElementById("number").value;
    let x = parseInt(xString)

  if (number == 1) {
    return 1;
  }else if (number == 0) {
    return 0;
  } else {
  return fibonacci(num-1) + fibonacci(num-2)
  }
} 
