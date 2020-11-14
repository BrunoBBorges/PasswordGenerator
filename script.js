// Assignment Code
var generateBtn = document.querySelector("#generate");
//declare variables
var capitialLetters = document.getElementById("capitals").checked;
var lowercaseLetters = document.getElementById("lowercase").checked;
var passwordNumbers = document.getElementById("numbers").checked;
var specialChars = document.getElementById("specialChars").checked;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Define actions of generate password
function generatePassword() {

  // Prompt user for password parameters
  var charLength = prompt("Enter a number for your password length between 8 - 128 characters.")
    // Return an error for any invalid inputs to character length
    if (isNaN(charLength) || parseInt(charLength) < 8 || parseInt(charLength) > 128 || charLength === ""){
      alert("Error, Please enter a number between 8-128")
    }
 
  var randompassword = "";
  var password = "";
//Define variables to hold alpabetical/numerical/special character values for use in generation
  var specialChars = "!@#$%^&*()_-=+<>?;:\"''{}[]";
  var numbers = "0123456789";
  var lowercase = "abcdefghijklnmopqrstuvxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// check to see what the user has selected
  if (document.getElementById("lowerCase").checked) {
    pword = pword + lowercase;
  }
  
  if (document.getElementById("upperCase").checked) {
    pword = pword + uppercase;
  }
  
  if (document.getElementById("numbers").checked) {
    randompassword = randompassword + numbers;
  }
  
  if (document.getElementById("symbols").checked) {
    randompassword = randompassword + specialChars;
  }


  for (var i = 0; i < charLength; i++) {
    var gen_random = Math.floor(Math.random() * randompassword.length);
     password += randompassword[gen_random];
  }

  return password;


  function newFunction() {
    return document.getElementById("charLength").value;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
