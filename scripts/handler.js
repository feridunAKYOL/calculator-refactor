function calculator() {
  var a= parseInt(document.querySelector('#firstNumber').value);
  var b= parseInt(document.querySelector('#secondNumber').value);
  var op = document.querySelector('#operator').value;

  var calculate;

  if (op == 'add'){
    calculate = a + b;
  } else if (op == 'min'){
    calculate = a - b;
  } else if (op == 'div'){
    calculate = a / b;
  } else if (op == 'mult'){
    calculate = a * b;
  }
  document.querySelector('#result').innerHTML = calculate;
}
