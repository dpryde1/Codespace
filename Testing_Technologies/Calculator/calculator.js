//display on calc screen
function display(val) {
  document.getElementById("result").value += val;
  return val;
}

//solves results when press equals
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  return y;
}

//clears when press C
function clearScreen() {
  document.getElementById("result").value = "";
}

//negate negative button
function negate() {
  var result = document.getElementById("result");
  var currentValue = parseFloat(result.value);

  // Check if the current value is a number)
  if (!isNaN(currentValue)) {
    // Toggle the sign of the current value
    result.value = currentValue * -1;
  }
}
