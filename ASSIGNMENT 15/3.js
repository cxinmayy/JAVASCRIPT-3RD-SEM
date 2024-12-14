function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  let num = parseInt(prompt("Enter a number:"));
  let result = factorial(num);
  document.write("<h3>Factorial of " + num + " is " + result + ".</h3>");
  