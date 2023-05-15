
// Assignment code here
var generateBtn = document.querySelector("#generate");

function askPrompts() {
  
  var checkLength = getLength();
  console.log(checkLength); // this is the length that the user decided on
  if (checkLength >= 8 && checkLength <= 129) {
    
    alert("Your password will be " + checkLength + " characters long.");
    
  } else {

    alert("Please keep your password length between 8 and 129 characters.");
    return askPrompts();
    
  }


  //var checkCharacters = getCharacters();
  //console.log(checkCharacters);
  //if (!checkCharacters) {

    //alert("Please include at least one character option so that your password can be generated.");

  //} else {

    //console.log(checkCharacters);

  //}
  
  return "fuck you";
}

function getLength() {

  var charLength = prompt("How many characters long would you like your password to be?");

  return charLength;

}

  var lowercase = confirm("Include lowercase characters? Click OK if yes, click Cancel if no.");
  var uppercase = confirm("Include uppercase characters? Click OK if yes, click Cancel if no.");
  var numbers = confirm("Include numbers? Click OK if yes, click Cancel if no.");
  var specChar = confirm("Include special characters? Click OK if yes, click Cancel if no.");
  var characters = [lowercase, uppercase, numbers, specChar];

function getCharacters() {

  if (lowercase == false && uppercase == false && numbers == false && specChar == false) {

    alert("Please include at least one character option so that your password can be generated.");

  } else {
    console.log(characters);
  }

  return;

}

getCharacters();


generateBtn.addEventListener("click", function () {
  alert("Hello, welcome to the password generator.");
  
  var result = askPrompts()
  var passwordText = document.querySelector("#password");
  
  passwordText.value = result;
})


// var characters = [lowercase, uppercase, numbers, specChar];

// console.log(characters);

// if (!characters) {

//   alert("Please select at least one character parameter so that we can create your password");

// } else {

//   console.log("success")

// }



// Get references to the #generate element

// Write password to the #password input
// function writePassword() {
//  var password = generatePassword();

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
