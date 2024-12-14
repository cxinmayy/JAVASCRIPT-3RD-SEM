let arr = [];
let types = ["Integer", "Float", "String", "Boolean", "Null"];

for (let i = 0; i < types.length; i++) {
  let value = prompt(`Enter a ${types[i]} value:`);
  arr.push(value);
}

document.write("<h3>Stored Values:</h3>");
arr.forEach((value, index) => {
  document.write("Value " + (index + 1) + ": " + value + "<br>");
});
