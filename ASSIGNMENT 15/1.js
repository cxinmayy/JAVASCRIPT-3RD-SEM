let n = parseInt(prompt("Enter the number of terms:"));
let a = 0, b = 1, i = 1;

document.write("<h3>Fibonacci Series:</h3>");
while (i <= n) {
  document.write(a + " ");
  let nextTerm = a + b;
  a = b;
  b = nextTerm;
  i++;
}
