function calculator(event) {

  // read & process user input from event

  var a= parseInt(document.querySelector('#firstNumber').value);
  var b= parseInt(document.querySelector('#secondNumber').value);
  var op = document.querySelector('#operator').value;
  // pass user input through core logic
 const calculated= doMath(op, a, b);
  // render output to DOM for user
  document.querySelector('#result').innerHTML = calculated;

 
  // log user action for developers
    console.log(calculate);
  
  // return true for the browser
  return true;
}

