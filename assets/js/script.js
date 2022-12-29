
$(() => {

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?$#&@%!';
var passwordsLength;
var generateBtn = $("#generate");

function generatePassword() {
var random = '';
  for (let i = 1; i <= passwordsLength; i++) {
    let randomPassword = Math.floor(Math.random() * characters.length + 1); 
    random += characters.charAt(randomPassword); 
  }
  return random;
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
};

  generateBtn.on("click", () => {
    let criteriaOne = prompt("Include special character (?$#&@%!) Please enter Yes or No :");

    if (criteriaOne === "No") {
      characters = characters.substring(characters.length - 7, 0)

      $('#criteria-1').empty('Do not include special characters (?$#&@%!)').append('Do not include special characters (?$#&@%!)')
  
    } else if (criteriaOne === "Yes") {
      characters = characters;

      $('#criteria-1').empty('Include special characters (?$#&@%!)').append('Include special characters (?$#&@%!)')
    }
  
  // Second criteria 
    let criteriaTwo = prompt("Include uppercase letter: Enter Yes or No");
  
    if (criteriaTwo === "Yes") {
      characters = characters.toUpperCase();

      $('#criteria-2').empty('Include uppercase letters</li>').append('Include uppercase letters')

    } else if (criteriaTwo === "No") {
      characters = characters.toLowerCase();

      $('#criteria-2').empty('Do not include uppercase letters').append('Do not include uppercase letters')

    } else {
      characters = characters;
    }
  
  // Third criteria
    let criteriaThree = prompt("Include numeric characters 0123456789 : Enter Yes or NO");
  
    if (criteriaThree === "No") {
      characters = characters.replaceAll("0123456789", "");

      $('#criteria-3').empty('Do not include numeric characters 0123456789').append('Do not include numeric characters 0123456789')

    } else if (criteriaThree === "Yes") {
      characters = characters;

      $('#criteria-3').empty('Include numeric characters 0123456789').append('Include numeric characters 0123456789')
    }

  // Fourth criteria
    let criteriaFour = prompt("Password's length: Please enter a number from 8 to 128");
    passwordsLength = criteriaFour;

    criteriaFour > 128 ? alert("Please enter a valid number") : $('#criteria-4').empty(`Password's length: ${passwordsLength}`).append(`Password's length: ${passwordsLength}`);

    writePassword()
  });

}); 
