/*
// Assignment code here
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?$#&@%!';
  var passwordsLength = 8;
  var random = '';

  generateBtn.addEventListener("click", function() {
    let criteriaOne = prompt("Include special character ?$#&@%! : Enter Yes or No");
  
    if (criteriaOne === "Yes") {
      return characters;
  
    } else if (criteriaOne === "No") {
      return characters.substring(characters.length - 7, 0);
  
    } else {
      return false;
    }
  });
  
  generateBtn.addEventListener("click", function() {
    let criteriaTwo = prompt("Include uppercase letter: Enter Yes or No");
  
    if (criteriaTwo === "Yes") {
      return characters.toUpperCase();
  
    } else if (criteriaTwo === "No") {
      return characters.toLowerCase();
  
    } else {
      return false;
    }
  }); 
  
  generateBtn.addEventListener("click", function() {
    let criteriaThree = prompt("Include numeric characters 0123456789 : Enter Yes or NO");
  
    if (criteriaThree === "Yes") {
      return characters.replaceAll("0123456789", "")
  
    } else if (criteriaThree === "No") {
      return  characters;
  
    } else {
      return false;
    }
  }); 
  
  generateBtn.addEventListener("click", function() {
    let criteriaFour = prompt("Password's length: Enter a number from 8 to 128", passwordsLength);
  
    if (criteriaFour > 128) {
      alert("Please enter a valid number")
    } 
  });

  function generatePassword() {
    for (let i = 1; i <= passwordsLength.length; i++) {
      let randomPassword = Math.floor(Math.random() * characters.length - 0); 
      random += characters[randomPassword]; 
    }
    return random;
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

// Rearrange 
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?$#&@%!';
var passwordsLength = 8;
function generatePassword() {
var random = '';
  for (let i = 1; i <= passwordsLength; i++) {
    let randomPassword = Math.floor(Math.random() * characters.length + 1); 
    random += characters.charAt(randomPassword); 
  }
  return random;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  let criteriaOne = prompt("Include special character (?$#&@%!) Please enter Yes or No :");

  if (criteriaOne === "No") {
    characters = characters.substring(characters.length - 7, 0)

  } else if (criteriaOne === "Yes") {
    characters = characters;

  }
});

// Second criteria 
generateBtn.addEventListener("click", function() {
  let criteriaTwo = prompt("Include uppercase letter: Enter Yes or No");

  if (criteriaTwo === "Yes") {
    characters = characters.toUpperCase();

  } else if (criteriaTwo === "No") {
    characters = characters.toLowerCase();

  } else {
    characters = characters;
  }
}); 

// Third criteria
generateBtn.addEventListener("click", function() {
  let criteriaThree = prompt("Include numeric characters 0123456789 : Enter Yes or NO");

  if (criteriaThree === "No") {
    characters = characters.replaceAll("0123456789", "")

  } else if (criteriaThree === "Yes") {
    characters = characters;

  }
}); 

// Fourth criteria
generateBtn.addEventListener("click", function() {
  let criteriaFour = prompt("Password's length: Please enter a number from 8 to 128", passwordsLength);

  if (criteriaFour > 128) {
    alert("Please enter a valid number")
  } 
});

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
