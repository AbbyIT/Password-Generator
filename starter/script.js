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
let listofChosenCharacters= [];

function getPasswordOptions() {

  // password generator project

passwordLength = prompt("how long would you like your password length to be?");
lowerCasedOption =confirm("Would you like lowercase characters");
upperCasedOptions =confirm("Would you like upper case characters");
specialCharactersOptions= confirm("Would you like special characters");


// once characters have been chosen by user,  store them in listofChosencharacters and merge all characters into one
// if (passwordLength > 10) {

  
  
if (upperCasedOptions === true) {
    
    listofChosenCharacters = listofChosenCharacters.concat(upperCasedCharacters);
  };
  if (lowerCasedOption ===true){
    
    listofChosenCharacters=listofChosenCharacters.concat(lowerCasedCharacters);
  };
  
  if (specialCharactersOptions ===true) {
    
    listofChosenCharacters=listofChosenCharacters.concat(specialCharacters);
  };
  }
    // display combination of characters chosen
    console.log (listofChosenCharacters);

// } else {

//   alert ("Please choose a Number 10 between and 64");
// }

// Function for getting a random element from an array
// function getRandom(arr) {

  
  // Function to generate password with user input
  function generatePassword() {
    
    let practicePassword = "";
    for (let i = 0; i < passwordLength; i++) {
    
      // this will the characters typed by the user 
    let randomIndex = Math.floor(Math.random()*listofChosenCharacters.length)
    practicePassword+= listofChosenCharacters[randomIndex]
    
  }

  return practicePassword

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