function calculator (op,a,b){
  

}
// test cases for your doMath function
// these are all correct, you don't need to change them
const doMathTests = [
  { name: 'add - 1', args: ['add', 0, 0], expected: 0 },
  { name: 'add - 2', args: ['add', -4, 3], expected: -1 },
  { name: 'add - 3', args: ['add', -5, -1], expected: -6 },
  { name: 'min - 1', args: ['min', 1, 0], expected: 1 },
  { name: 'min - 2', args: ['min', 2, 1], expected: 1 },
  { name: 'min - 3', args: ['min', -5, -1], expected: -4 },
  { name: 'div - 1', args: ['div', 4, 2], expected: 2 },
  { name: 'div - 2', args: ['div', 3, 2], expected: 1.5 },
  { name: 'div - 3', args: ['div', 1, 4], expected: .25 },
  { name: 'mul - 1', args: ['mult', 3, 2], expected: 6 },
  { name: 'mul - 2', args: ['mult', 8, 0], expected: 0 },
  { name: 'mul - 3', args: ['mult', -1, -1], expected: 1 },
  { name: 'invalid - 1', args: ['tree', 0, 0], expected: 'invalid operation' },
  { name: 'invalid - 2', args: ['book', 0, 0], expected: 'invalid operation' },
  { name: 'invalid - 3', args: ['minus', 0, 0], expected: 'invalid operation' },
  // write 7 more test cases for doMath
  { name: 'add - ext1', args: ['add', -5/2, -3/2], expected: -4 },
  { name: 'min - ext1', args: ['min', 0, -7], expected: 7 },
  { name: 'mul - ext1', args: ['mult', -2, 11/2], expected: -11 },
  { name: 'div - ext1', args: ['min', -5, -1], expected: 5 },

];

// refactor the logic from the calculator tutorial into this function
function doMath(op, a, b) {
  // these if statements make sure all arguments are the correct type
  // they will throw errors if your handler passes the wrong type arguments
  if (typeof op !== 'string') {
    throw new Error('operation should be a string');
  }
  if (typeof a !== 'number') {
    throw new Error('a should be a number');
  }
  if (typeof b !== 'number') {
    throw new Error('b should be a number');
  }
  // write your code below this comment:
  if (op == 'add'){
    calculate = a + b;
} else if (op == 'min'){
    calculate = a - b;
} else if (op == 'div'){
    calculate = a / b;
} else if (op == 'mult'){
    calculate = a * b;
}
return calculate;
    
  }

testing(doMath, doMathTests);
