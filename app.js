// -----------------------Functions-------------------------------\\

// Chapter 35-38

// Question 1 

function currentdate ()
{
    var date = new Date();
    console.log(date);
}

currentdate();

// Question 2 

function greet ()
{
    var firstName = "Laraib";
    var lastName = "Shahzad";
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}

greet();

// Question 3 

// function sum (userInput1,userInput2)
// {
//     return userInput1 + userInput2;
// }

// var userInput1 = Number(prompt("Enter First Number."));
// var userInput2 = Number(prompt("Enter Second Number."));

// var result = sum(userInput1,userInput2);

// console.log(result);

// Question 4 

// function calc(num1,operator,num2)
// {
//     if(operator === "+") {
//         return num1 + num2;
//     }
//     else if(operator === "-"){
//         return num1 - num2;
//     }
//     else if(operator === "*"){
//         return num1 * num2;
//     }
//     else if(operator === "/"){
//         return num1 / num2;
//     }

// }

// var num1 = +prompt("Enter First Number..");
// var operator = prompt("Enter Operator..");
// var num2 = +prompt("Enter Second Number..");

// var resultedCalc = calc(num1,operator,num2);

// console.log(resultedCalc);

// Question 5 

// function square(number)
// {
//     return number * number;
// }

// var number = prompt("Enter the number you want to make the square off...")

// var resultedSquare = square(number);

// console.log(resultedSquare);

// Question 6 

// function factorial(n) 
// {
//     if (n === 0 || n === 1) {
//       return 1;
//     } 
//     else {
//       return n * factorial(n - 1);
//     }
// }

// var userValue = +prompt("Enter the number you want to make the factorial off..")

// var res = factorial(userValue);

// console.log(res);

// Question 7 

function counting() 
{
    for(var i = 1; i <= 100; i++){
        console.log(i);
    }
}

counting();

// Question 8 

function calculateHypotenuse(base, perpendicular) 
{
    function calculateSquare(number) {
      return number * number;
    }
  
    var baseSquared = calculateSquare(base);
    var perpendicularSquared = calculateSquare(perpendicular);
  
    var hypotenuseSquared = baseSquared + perpendicularSquared;
  
    var hypotenuse = Math.sqrt(hypotenuseSquared);
  
    return hypotenuse;
}

var baseLength = 3;
var perpendicularLength = 4;
var hypotenuseLength = calculateHypotenuse(baseLength, perpendicularLength);
  
console.log("The hypotenuse of the right triangle is" , hypotenuseLength);

// Question 9 

function areaOfReactangle1 (width,height) 
{
    return width * height;
}

function areaOfReactangle2 ()
{
    var width = arguments[0];
    var height = arguments[1];
    return width * height;
}

var widthValue = 4;
var heightValue = 8;


var area1 = areaOfReactangle1(widthValue,heightValue);
var area2 = areaOfReactangle2(widthValue,heightValue);

console.log("Area 1 (Value Approach): " + area1);
console.log("Area 2 (Variable Approach): " + area2);

// Question 10

function palindromeWord (userInput,check)
{
    for(var i = userInput.length - 1; i >= 0; i--){
        check = check + userInput[i]
    }
    if(userInput === check){
        console.log("It is a palindrome word.")
    }
    else{
        console.log("It is not a palindrome word.")
    }
}

var userInput = prompt("Enter a Word..")
var check = "";

palindromeWord(userInput,check);

// Question 11 

function upperCase ()
{
    var userInput = prompt("Enter a word.");
    
    var firstChar = userInput.slice(0, 1).toUpperCase();

    var remainChars = userInput.slice(1).toLowerCase();

    var completeWord = firstChar + remainChars;

    console.log(completeWord);
   
}

upperCase();

// Question 12 

function findLongestWord(inputString) 
{
    var words = inputString.split(' ');
  
    var longestWord = '';
  
    for (var word of words) 
    {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
}

var inputString = 'Web Development Tutorial';
var longest = findLongestWord(inputString);
console.log(longest);

// Question 13 

// Question 14