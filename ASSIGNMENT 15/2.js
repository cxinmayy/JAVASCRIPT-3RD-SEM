let num = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  document.write("<h3>" + num + " is a prime number.</h3>");
} else {
  document.write("<h3>" + num + " is not a prime number.</h3>");
}
