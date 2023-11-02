const inputSection = document.querySelector(".screen");
let inputOne = "";
let inputTwo = "";
let numberOne = 0;
let numberTwo = 0;
let operation = "";

document.addEventListener("click", (event) => {
  if(event.target.innerText === "C") {
    inputSection.innerText = "0";
  } else if(event.target.innerText === "0") {
    inputSection.innerText += "0"; 
  } else if(event.target.innerText === "1") {
    inputSection.innerText += "1"
  }else if(event.target.innerText === "2") {
    inputSection.innerText += "2"
  }else if(event.target.innerText === "3") {
    inputSection.innerText += "3"
  }else if(event.target.innerText === "4") {
    inputSection.innerText += "4"
  }else if(event.target.innerText === "5") {
    inputSection.innerText += "5"
  }else if(event.target.innerText === "6") {
    inputSection.innerText += "6"
  }else if(event.target.innerText === "7") {
    inputSection.innerText += "7"
  }else if(event.target.innerText === "8") {
    inputSection.innerText += "8"
  }else if(event.target.innerText === "9") {
    inputSection.innerText += "9"
  } else if(event.target.innerText === "←") {
      const actualValue = inputSection.innerText;
      if(actualValue === "") {
        inputSection.innerText = "0"
      } else if(actualValue.length <= 1){
        inputSection.innerText = "0"
      } else {
        inputSection.innerHTML = actualValue.slice(0, -1)
      }
  } else if(event.target.innerText === "+") {
    operation = "+"
    inputOne = inputSection.innerText;
    numberOne = +inputOne;
    inputSection.innerText = "";
  } else if(event.target.innerText === "-") {
    operation = "-"
    inputOne = inputSection.innerText;
    numberOne = +inputOne;
    inputSection.innerText = "";
  } else if(event.target.innerText === "") {
    operation = "X"
    inputOne = inputSection.innerText;
    numberOne = +inputOne;
    inputSection.innerText = "";
  } else if(event.target.innerText === "÷") {
    operation = "÷"
    inputOne = inputSection.innerText;
    numberOne = +inputOne;
    inputSection.innerText = "";
  } else if(event.target.innerText === "=") {
    
    let result = 0;
  
    if(operation === ""){
      result = inputSection.innerText;
    } else {
      inputTwo = inputSection.innerText;
      numberTwo = +inputTwo;
    
      if(operation === "+") {
        result = numberOne + numberTwo;
      } else if(operation === "-") {
        result = numberOne - numberTwo;
      } else if(operation === "×") {
        result = numberOne * numberTwo;
      } else if(operation === "÷") {
        result = numberOne / numberTwo;
      } 
    }
    
    inputSection.innerText = result + "";
    
  } 
})