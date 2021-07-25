"use strict";

const dateOfBirth = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky");
const btn = document.querySelector("button");
const resultElement = document.querySelector(".result");
const resultText = document.querySelector(".resultText");
const btnClose = document.querySelector(".close");
const divPrivacy = document.querySelector(".privacy")

function checkLucky(number1, number2) {
  let result = 0;
  for (let i = 0; i < number1.length; i++) {
    if (number1[i] == "-") {
      continue;
    } else {
      result += Number(number1[i]);
    }
  }
  console.log(result)
  if(result===0)
  {
    resultElement.classList.toggle("display");
    resultElement.classList.add("success");
    resultText.textContent = "Please enter correct value";
  }
  else if (result % number2 === 0) {
    console.log("True");
    resultElement.classList.toggle("display");
    resultElement.classList.add("success");
    resultText.textContent = "Yay! You are lucky";
  } else {
    resultElement.classList.toggle("display");
    resultElement.classList.add("faliure");
    resultText.textContent = "Sorry! This number is Not Lucky";
  }
}

function close()
{
  divPrivacy.classList.toggle("display");
}

btn.addEventListener("click", function () {
  
  checkLucky(dateOfBirth.value, Number(luckyNumber.value));
});
resultElement.addEventListener("click", function () {
  resultElement.classList.toggle("display");
  if (resultElement.classList.contains("success")) {
    resultElement.classList.remove("success");
  } else {
    resultElement.classList.remove("faliure");
  }
});

btnClose.addEventListener("click",close);
