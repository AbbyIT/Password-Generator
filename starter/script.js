// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
let upperCasedCharacters = [
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

let passwordLength;
let listofChosenCharacters

function getPasswordOptions() {


passwordLength = prompt("how long would you like your password length to be?");
lowerCasedCharacters =prompt("Would you like lowercase characters");
upperCasedCharacters =prompt("Would you like upper case characters");
specialCharacters= Prompt("Would you like special characters");

}

console.log ("got it!");

// once characters have been chosen by user,  store them in listofChosencharacters and merge all characters into one
if (upperCasedCharacters === true) {

  listofChosenCharacters = listofChosenCharacters.concat(upperCasedCharacters)
};
if (lowerCasedCharacters ===true){

  listofChosenCharacters=listofChosenCharacters.concat(lowerCasedCharacters)
};

if (specialCharacters ===true) {

  listofChosenCharacters=listofChosenCharacters.concat(specialCharacters)
}

else {

  alert ("Choose a Number 10 between and 64")
}

console.log (listofChosenCharacters)

// Function for getting a random element from an array
// function getRandom(arr) {

//   let randomIndex = Math.floor(Math.random()*arrayName.length)
// }

// Function to generate password with user input
function generatePassword() {

  let practicePassword = "";
  for (let i = 0; i < passwordLength; i++) {
    
    // practicePassword += "j"
    practicePassword+= listofChosenCharacters
    
  }

  return listofChosenCharacters;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions ()
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);