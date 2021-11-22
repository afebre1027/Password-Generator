// Assignment code here
var generateBtn = document.querySelector("#generate");


var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var upperCase = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "0123456789";
var symbols = "!@#$%^&*().,?";


function generatePassword(){
    console.log("btn");
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
function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
  
}
// console.log(getRandomSymbol());
 window.confirm ("Would you like Symbols?");

 // random number 0-9
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// console.log(getRandomNumber());
 window.confirm ("Would you like Numbers?");

// random upper case letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(getRandomUpper());
 window.confirm ("Would you like Uppercase Letters?");

// random lower case letters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// console.log(getRandomLower());
 window.confirm ("Would you like Lowercase Letters?");

// Write password to the #password input

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);