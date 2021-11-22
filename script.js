// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword(){
    // console.log("btn");
    // password length between 8 & 128 characters

    var passwordLength = prompt("choice between 8  & 128 characters");
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8){
      alert("password length is to short, try again!");
      return "";
    }
    if (passwordLength > 128){
      alert("password lenght is to long, try again!")
      return "";
    }
    // lowercase, uppercase, number, symbol
    //random symbol
    var confirmSymbol = confirm("would you like symbols?");
    var confirmNumber = confirm("would you like numbers");
    var confirmLower = confirm("would you like lowercase");
    var confirmUpper = confirm("would you like uppercase");
  var confirmSelection = []
  var finalPassword = "";
    if(confirmSymbol === true){
    confirmSelection.push(getRandomSymbol)
    finalPassword += getRandomSymbol();
  }
    if(confirmNumber === true){
      confirmSelection.push(getRandomNumber)
      finalPassword += getRandomNumber();
    }
    if(confirmLower === true){
      confirmSelection.push(getRandomLower)
      finalPassword += getRandomLower();
    }
    if(confirmUpper === true){
      confirmSelection.push(getRandomUpper)
      finalPassword += getRandomUpper();
    }
   console.log(finalPassword);
    for (var i = finalPassword.length; i < passwordLength; i++){
      finalPassword += confirmSelection[Math.floor(Math.random() * confirmSelection.length)]();
    }
    return finalPassword;
// Write password to the #password input

}
function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
  
}
// console.log(getRandomSymbol());

 // random number 0-9
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// console.log(getRandomNumber());

// random upper case letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(getRandomUpper());

// random lower case letters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);