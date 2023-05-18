var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  alert("Hello, welcome to the password generator.");
  
  var result = askPrompts()
  var passwordText = document.querySelector("#password");
  
  passwordText.value = result;
})


function getLength() {

    var charLength = prompt("How many characters long would you like your password to be?");
  
    return charLength;
  
  }


function askPrompts() {
  
  var checkLength = getLength();
  console.log(checkLength); // this is the length that the user decided on
  if (checkLength >= 8 && checkLength <= 129) {
    
    alert("Your password will be " + checkLength + " characters long.");
    
  } else {

    alert("Please keep your password length between 8 and 129 characters.");
    return askPrompts();
    
  }
  
  var confirmLowercase = confirm("Include lowercase characters? Click OK if yes, click Cancel if no.");
  var confirmUppercase = confirm("Include uppercase characters? Click OK if yes, click Cancel if no.");
  var confirmNumbers = confirm("Include numbers? Click OK if yes, click Cancel if no.");
  var confirmSpecChar = confirm("Include special characters? Click OK if yes, click Cancel if no.");

  var lowercase = "abcdefghijklmnopqrstuvwxyz".split('');
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var numbers = "0123456789".split('');                         
  var specChar = "`~!@#$%^&*()_-+=;:'{}[]|<>,.".split('');

  if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == false && confirmSpecChar == false) {

    alert("Please include at least one character option so that your password can be generated.");
    return askPrompts;

  } else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == false && confirmSpecChar == false) {
    
      var passCharacters = lowercase;

  } else if (confirmLowercase == false && confirmUppercase == true && confirmNumbers == false && confirmSpecChar == false) {
    
      var passCharacters = uppercase;

  } else if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == true && confirmSpecChar == false) {
    
      var passCharacters = numbers;
      
  } else if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == false && confirmSpecChar == true) {
    
      var passCharacters = specChar;

  } else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == false && confirmSpecChar == false) {
    
      var passCharacters = (lowercase + uppercase).replace(/,/g, "");

  } else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == true && confirmSpecChar == false) {
    
      var passCharacters = (lowercase + numbers).replace(/,/g, "");

  } else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == false && confirmSpecChar == true) {
    
      var passCharacters = (lowercase + specChar).replace(/,/g, "");

  } else if (confirmLowercase == false && confirmUppercase == true && confirmNumbers == true && confirmSpecChar == false) {
    
      var passCharacters = (uppercase + numbers).replace(/,/g, "");

  } else if (confirmLowercase == false && confirmUppercase == true && confirmNumbers == false && confirmSpecChar == true) {
    
      var passCharacters = (uppercase + specChar).replace(/,/g, "");

  } else if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == true && confirmSpecChar == true) {
    
      var passCharacters = (numbers + specChar).replace(/,/g, "");

  } else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == true && confirmSpecChar == false) {
    
      var passCharacters = (lowercase + uppercase + numbers).replace(/,/g, "");

  } else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == false && confirmSpecChar == true) {
    
      var passCharacters = (lowercase + uppercase + specChar).replace(/,/g, "");

  } else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == true && confirmSpecChar == true) {
    
      var passCharacters = (lowercase + numbers + specChar).replace(/,/g, "");

  } else if (confirmLowercase == false && confirmUppercase == true && confirmNumbers == true && confirmSpecChar == true) {
    
      var passCharacters = (uppercase + numbers + specChar).replace(/,/g, "");

  } else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == true && confirmSpecChar == true) {

      var passCharacters = (lowercase + uppercase + numbers + specChar).replace(/,/g, "");

  };

  console.log(passCharacters);
 
  var randomCharacter = "";

  for (i = 0; i < checkLength; i++) {
    randomCharacter += passCharacters[Math.floor(Math.random() * passCharacters.length)];
  }

  console.log(checkLength);
  console.log(randomCharacter);
  return randomCharacter;

}
  
