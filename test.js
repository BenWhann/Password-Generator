

var confirmLowercase = confirm("Include lowercase characters? Click OK if yes, click Cancel if no.");
var confirmUppercase = confirm("Include uppercase characters? Click OK if yes, click Cancel if no.");
var confirmNumbers = confirm("Include numbers? Click OK if yes, click Cancel if no.");
var confirmSpecChar = confirm("Include special characters? Click OK if yes, click Cancel if no.");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ";", ":", "'", "{", "}", "[", "]", "|", "<", ">", ",", "."];

if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == false && confirmSpecChar == false) {

  alert("Please include at least one character option so that your password can be generated.");

} else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == false && confirmSpecChar == false) {
  
    var passCharacters = lowercase;

} else if (confirmLowercase == false && confirmUppercase == true && confirmNumbers == false && confirmSpecChar == false) {
  
    var passCharacters = uppercase;

} else if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == true && confirmSpecChar == false) {
  
    var passCharacters = numbers;
    
} else if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == false && confirmSpecChar == true) {
  
    var passCharacters = specChar;

} else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == false && confirmSpecChar == false) {
  
    var passCharacters = lowercase.concat(uppercase);

} else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == true && confirmSpecChar == false) {
  
    var passCharacters = lowercase.concat(numbers);

} else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == false && confirmSpecChar == true) {
  
    var passCharacters = lowercase.concat(specChar);

} else if (confirmLowercase == false && confirmUppercase == true && confirmNumbers == true && confirmSpecChar == false) {
  
    var passCharacters = uppercase.concat(numbers);

} else if (confirmLowercase == false && confirmUppercase == true && confirmNumbers == false && confirmSpecChar == true) {
  
    var passCharacters = uppercase.concat(specChar);

} else if (confirmLowercase == false && confirmUppercase == false && confirmNumbers == true && confirmSpecChar == true) {
  
    var passCharacters = numbers.concat(specChar);

} else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == true && confirmSpecChar == false) {
  
    var passCharacters = lowercase.concat(uppercase, numbers);

} else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == false && confirmSpecChar == true) {
  
    var passCharacters = lowercase.concat(uppercase, specChar);

} else if (confirmLowercase == true && confirmUppercase == false && confirmNumbers == true && confirmSpecChar == true) {
  
    var passCharacters = lowercase.concat(specChar, numbers);

} else if (confirmLowercase == false && confirmUppercase == true && confirmNumbers == true && confirmSpecChar == true) {
  
    var passCharacters = specChar.concat(uppercase, numbers);

} else if (confirmLowercase == true && confirmUppercase == true && confirmNumbers == true && confirmSpecChar == true) {

    var passCharacters = lowercase.concat(uppercase, numbers, specChar);

}

console.log(passCharacters);

//var randomCharacter = passCharacters[Math.floor(Math.random() * passCharacters.length)];
//console.log(randomCharacter);

for (i = 0; i < checkLength.length; i++); {
  var randomCharacter += passCharacters[Math.floor(Math.random() * checkLength.length)];
} 

console.log(randomCharacter);



