
// PSEUDO CODE
// Generate a password when the button is clicked
// Present a series of prompts for password criteria

//  Length of password
//       * At least 10 characters but no more than 64.

  // prompt: how long would you like your password to be? (10-64)

  var passLength = parseInt(prompt("How long would you like your password to be?"));

  if(typeof(passLength) == 'number') {
    console.log("Well done! It's a number!");
  } else {
    alert("Please type a number between 10-64");
  }

// var isLowercase = false;
// var is


  // Validation:
    // ensure input is numerical and falls within the required specifications (checking that the number of characters is between 10-64)

//     * Character types
//       * Lowercase
// Confirm prompt: Do you want lowercase characters in your password?
//       * Uppercase
// Confirm prompt: Do you want uppercase characters in your password?
//       * Numeric
// Confirm prompt: Do you want numeric characters in your password?
//       * Special characters ($@%&*, etc)
// Confirm prompt: Do you want special characters in your password?
//   * Code should validate for each input and at least one character type should be selected
//minimum requirements for the code to function: length of characters and at least 1 character type
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page




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

// Function to prompt user for password options
function getPasswordOptions() {

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