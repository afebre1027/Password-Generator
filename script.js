// Assignment code here
var generateBtn = document.querySelector("#generate");


var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var upperCase = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "0123456789";
var symbols = "!@#$%^&*().,?";


function generatePassword(){
    console.log("btn");
    // password length between 8 & 128 characters
    var pswd = "";
    var pswdChar = "";

    var passwordLength = prompt("choice between 8  & 128 characters");

    // lowercase, uppercase, number, symbol
    
    
    // validate the input
    
    
    
    // generate password on page
    return
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);