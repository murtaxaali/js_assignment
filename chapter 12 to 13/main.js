//Q1
///
var inputChar = prompt('Enter a character:');

var charCode = inputChar.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert(inputChar + ' is a number.');
}
else if (charCode >= 65 && charCode <= 90) {
    alert(inputChar + ' is an uppercase letter.');
}
else if (charCode >= 97 && charCode <= 122) {
    alert(inputChar + ' is a lowercase letter.');
}
else {
    alert(inputChar + ' is not a number or letter.');
}
///

//Q2
///
var a = +prompt("Enter first number :")
var b = +prompt("Enter second number :")

if (a > b) {
      alert(`${a} is greater than ${b}`)
}else if (a < b) {
      alert(`${b} is greater than ${a}`)
}else{
      alert(`${a} is equal to ${b}`)
}
///


//Q3
///
var userNum = +prompt("Enter any number to check whether it is positive , negative or zero :")

if (userNum > 0) {
      alert(`${userNum} is Positive`)
}else if (userNum < 0) {
      alert(`${userNum} is Negative`)
}else{
      alert(`The number is 0`)
}
///


//Q4
///
var userNum = +prompt("Enter any number to check whether it is positive , negative or zero :")

if (userNum > 0) {
    alert(`${userNum} is Positive`)
}else if (userNum < 0) {
    alert(`${userNum} is Negative`)
}else{
    alert(`The number is 0`)
}
///


//Q5
///

var correctPassword = "abc123def"
var userPassword = prompt("Please Enter your Password :")

if (userPassword === "") {
      alert("Please enter your password")
}else if (userPassword === correctPassword) {
      alert("Correct! The password you entered matches the original password")
}else{
      alert("Incorrect Password")
}
///


//Q6
///
var greeting;
var hour = 13;
if (hour < 18) {
      greeting = "Good day";
      alert(greeting)
}
else{
      greeting = "Good evening";
      alert(greeting)
}

///

//Q7
///
var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

if (time >= 0 && time < 1200) {
      alert("Good morning!")
} else if (time >= 1200 && time < 1700) {
      alert("Good afternoon!")
} else if (time >= 1700 && time < 2100) {
      alert("Good evening!")
} else if (time >= 2100 && time < 2400) {
      alert("Good night!")
} else {
      alert("Invalid input. Please enter a time between 0000 and 2359.")
}
///