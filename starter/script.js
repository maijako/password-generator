
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

//Let's start by declaring a variable that will store user choice of password length
  //First, we'll use a prompt to ask the user how long their password should be
  //A do... while loop will ensure that user sees a prompt until a value is put in
  var passLength = prompt("How long would you like your password to be?");
  // while (passLength == null);
    // prompt("Please input a number between 10 and 64!");
//Then, we'll run and if... else to make sure the user inputs a number between 10-64
 
  // while (passLength == null) {
  //   prompt("You can't leave the field blank! Please put in a number");
  //   break;}

    // if (passLength !== null);
    //       if (isNaN(passLength) || passLength==="" || passLength < 10 || passLength > 64){
    //       prompt("Please input a number between 10 and 64!");
    //     } else {
    //       alert("Your password will be "+passLength+" long");
    //     }
      
    while (passLength == null) {
      alert("You can't leave the field blank! Please put in a number");
      passLength = prompt("Please input a number between 10 and 64!");
      }

    if (passLength !== null) {
      while (isNaN(passLength) || passLength==="" || passLength < 10 || passLength > 64){
      passLength = prompt("Please input a number between 10 and 64!");
      }
    }

    // if (passLength !== null) {
    //       if (isNaN(passLength) || passLength==="" || passLength < 10 || passLength > 64){
    //       prompt("Please input a number between 10 and 64!");
    //     } else {
    //       alert("Your password will be "+passLength+" long");
    //     }
    // } 
   
  
//     if (passLength !== null) {
//       if (isNaN(passLength) || passLength==="" || passLength < 10 || passLength > 64){
//       prompt("Please input a number between 10 and 64!");
//     } else {
//       alert("Your password will be "+passLength+" characters long");
//     }
// } 
  
 
 
    
   


//Now let's declare variables that will store user character type choices
var lowerPass, upperPass, numPass, specialPass;

//Add confirm messages to the created variables in which user choices will be stored
lowerPass = confirm("Include lowercase letters?");
console.log(lowerPass);
upperPass = confirm("Include uppercase letters?");
numPass = confirm("Include numbers?");
specialPass = confirm("Include special characters?");

if ((lowerPass == false) && (upperPass == false) && (numPass == false) && (specialPass == false)){
  alert("please select at least one condition");
  
}

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