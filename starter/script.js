
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

//Variables to  store user character type choices
var lowerPass, upperPass, numPass, specialPass;

//A variable to store the concatenated array data for password based on user choice
var userPassArr = "";

//A variable to store user input for password length
function promptMe(){
var passLength = prompt("How long would you like your password to be?");

//A while loop to continue prompting user to enter a value until it is done
while (passLength == null) {
  alert("You can't leave the field blank! Please put in a number");
  passLength = prompt("Please input a number between 10 and 64!");
}
//If user does enter a value, run a while loop until the value entered meets acceptance criteria 
if (passLength !== null) {
  while (isNaN(passLength) || passLength === "" || passLength < 10 || passLength > 64) {
    passLength = prompt("Please input a number between 10 and 64!");
  }
}

//Variables to store user choices of special characters to include, stored in a function
function getPasswordOptions() {
  lowerPass = confirm("Include lowercase letters?");
  upperPass = confirm("Include uppercase letters?");
  numPass = confirm("Include numbers?");
  specialPass = confirm("Include special characters?");
}
getPasswordOptions();

//A while loop to run the function above until the user selects at least one condition
while ((lowerPass == false) && (upperPass == false) && (numPass == false) && (specialPass == false)) {
  alert("Please select at least one condition!");
  getPasswordOptions();
}


//changing passLength value type back to number and storing it in a new variable
var targetLength = Number(passLength);


//Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//storing random characters in userPassArr variable based on user choices
function constructPassword() {

  if (lowerPass == true && userPassArr.length < targetLength) {
    userPassArr += getRandom(lowerCasedCharacters);
  }
  if (upperPass == true && userPassArr.length < targetLength) {
    userPassArr += getRandom(upperCasedCharacters);
  }
  if (numPass == true && userPassArr.length < targetLength) {
    userPassArr += getRandom(numericCharacters);
  }
  if (specialPass == true && userPassArr.length < targetLength) {
    userPassArr += getRandom(specialCharacters);
  }
}

// Function to generate password with user input
function generatePassword() {
  while (userPassArr.length < targetLength) {
    constructPassword();
  }
}

generatePassword();

// }
//   var options = {
//     "passLength": passLength, 
//     "lowerPass": lowerPass,
//     "upperPass": upperPass,
//     "numPass": numPass,
//     "specialPass": specialPass
//   }
//   return options;

console.log(userPassArr);
console.log(targetLength);
console.log(userPassArr.length)


// randomize characters in the generated password


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
}