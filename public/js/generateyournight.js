// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writeCandy() {
  var candy = generateCandy();
  var candyText = document.querySelector("#candy");

  candyText.value = candy;
  

}

// Start of Code
// I set the variables that would be used for the password. I set them all up separately because I wanted to make sure that the uppercase and lowercase would be separate.
var fruityCandy =["Starbursts", "Skittles", "Gummy Bears", "Jolly Ranchers", "Nerds", "Jelly Beans", "Twizzlers"];
var sourCandy = ["Sour Patch Kids", "Sour Punch", "Sweet Tarts", "Lemonheads", "Warheads"];
var chocolateCandy = ["Hershey", "Snickers", "Kitkat", "Butterfinger", "Milkyway", "3 Muskateers"];
var candyCorn = ["Candy Corn"];
 
var confirmLength = "";
var confirmFruityCandy;
var confirmSourCandy;
var confirmChocolateCandy;
var confirmCandyCorn;


function generateCandy() {
  var confirmLength = (prompt("You can have only 1 piece of candy every hour!"));

  // Where the size of the password is confirmed (while the password cannot be less than or equal to 7, cannnot be greater than or equal to 129)
  // This is to confirm that the password will not be less than 8 or more than 128
  //Prompt will open saying how many characters your password will be
  while(confirmLength <= 0 || confirmLength >= 2) {
      alert("Boo! Try again.");
      var confirmLength = (prompt("Say it with me: I will have ONE!! piece of candy"));
      } 

       
      alert(`You will have ${confirmLength} piece of candy! Be careful of cavities.`);

    
    var confirmFruityCandy = confirm("Do you want fruit flavored candy?");
    var confirmSourCandy = confirm("Do you want sour flavored?");    
    var confirmChocolateCandy = confirm("Do you want chocolate candy?");
    var confirmCandyCorn = confirm("Do you REALLY want candy corn?");
       
      while(confirmFruityCandy === false && confirmSourCandy === false && confirmChocolateCandy === false && confirmCandyCorn === false) {
        alert("Not very spooky of you.");
        var confirmFruityCandy = confirm("Do you want fruit flavored candy?");
        var confirmSourCandy = confirm("Do you want sour flavored candy?");    
        var confirmChocolateCandy = confirm("Do you want chocolate candy?");
        var confirmCandyCorn = confirm("Last chance. Do you ACTUALLY want candy corn?");   
    } 

      
      var chosenCandy = [];
      
    if (confirmFruityCandy) {
      chosenCandy = chosenCandy.concat(fruityCandy)
    }

    if (confirmSourCandy) {
      chosenCandy = chosenCandy.concat(sourCandy)
    }
      
    if (confirmChocolateCandy) {
      chosenCandy = chosenCandy.concat(chocolateCandy)
    }

    if (confirmCandyCorn) {
      chosenCandy = chosenCandy.concat(candyCorn)
    }

      console.log(chosenCandy)

      
      var randomCandy = ""
      // Math floor used to randomize the letters and numbers and special characters so the password is generated
      for (var i = 0; i < confirmLength; i++) {
        randomCandy = randomCandy + chosenCandy[Math.floor(Math.random() * chosenCandy.length)];
        console.log(randomCandy)
      }
      return randomCandy;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writeCandy);