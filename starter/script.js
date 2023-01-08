
//CRITERIA
//   * Code should validate for each input and at least one character type should be selected
//minimum requirements for the code to function: length of characters and at least 1 character type
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

//__________________________________________________________________________________________________
//__________________________________________________________________________________________________
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//A variable to store user input for password length
var passLength = prompt("How long would you like your password to be?");

//A while loop to ensure user doesn't leave the password length blank
while (passLength == null) {
  alert("You can't leave the field blank! Please put in a number");
  passLength = prompt("Please input a number between 10 and 64!");
}
//An embedded while loop to ensure user is prompted to input a valid value for password length
if (passLength !== null) {
  while (isNaN(passLength) || passLength==="" || passLength < 10 || passLength > 64){
  passLength = prompt("Please input a number between 10 and 64!");
  }
}

//Variables to  store user character type choices
var lowerPass, upperPass, numPass, specialPass;
//A variable to store the array data for password generation based on user choice
var userPassArray

//Variables to store user choices of special characters to include, stored in a function
function getPasswordOptions() {
  lowerPass = confirm("Include lowercase letters?");
  upperPass = confirm("Include uppercase letters?");
  numPass = confirm("Include numbers?");
  specialPass = confirm("Include special characters?");
}
getPasswordOptions();

//A while loop to make sure user selects at least one condition
while ((lowerPass == false) && (upperPass == false) && (numPass == false) && (specialPass == false)) {
  alert("Please select at least one condition!");
  getPasswordOptions();
}




// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);