function calculator() {

  // read & process user input from event
  let a= parseInt(document.querySelector('#firstNumber').value);
  let b= parseInt(document.querySelector('#secondNumber').value);
  let operation = document.querySelector('#operator').value;


  // pass user input through core logic
  let calculated = doMath(operation, a, b);

  // render output to DOM for user
  document.querySelector('#result').innerHTML = calculated;

  // log user action for developers
    console.log(calculate);
  
  // return true for the browser
  return true;
}

