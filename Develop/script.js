var characterLength = 8;
var choiceArray=["","","","","","","",""]
var lowercaseCharacters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","?",'"',"'","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<",">","@","[","]","\\","^","-","_","`","{","}","|","~"];
var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();

  passwordText.value = newPassword;
  } else{
    passwordText.value = "";
  }
}

// Add event listener to generate button
function generatePassword() {
  var password = "";
  for (var i = 0; i <characterLength; i++){
    var randomIndex = Math.floor(Math.random()*choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}
//User choices for Password generator
function getPrompts(){
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters do you want your password to have? (8 - 128 characters)"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){
    alert("Character length must be an integer from 8 - 128. Please try again.");
    return false;
  }
  if (confirm("Would you like your password to have lowercase letters?")){
    choiceArray = choiceArray.concat(lowercaseCharacters)
  }
  if (confirm("Would you like your password to have uppercase letters?")){
    choiceArray = choiceArray.concat(uppercaseCharacters)
  }
  if (confirm("Would you like your password to have special characters (ie: ?, @, !)?")){
    choiceArray = choiceArray.concat(specialCharacters)
  }  
  if (confirm("Would you like your password to have numbers?")){
    choiceArray = choiceArray.concat(numberCharacters)
  }
  return true;
}