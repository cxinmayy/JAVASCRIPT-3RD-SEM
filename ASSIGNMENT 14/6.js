// Program to find the greatest number among three numbers
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

if (num1 > num2 && num1 > num3) {
  console.log("The greatest number is: " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("The greatest number is: " + num2);
} else {
  console.log("The greatest number is: " + num3);
}
