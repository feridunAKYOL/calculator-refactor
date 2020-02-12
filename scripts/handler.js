function calculator() {

  // read & process user input from event
  var a= parseInt(document.querySelector('#firstNumber').value);
  var b= parseInt(document.querySelector('#secondNumber').value);
  var op = document.querySelector('#operator').value;


  // pass user input through core logic
  let calculate= domath

  // render output to DOM for user
  document.querySelector('#result').innerHTML = calculate;

  // log user action for developers
    console.log(calculate);
  
  // return true for the browser
  return true;
}

