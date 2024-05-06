function curry (func, arity) {
  return function curried(...args) {
    if(args.length < arity){ // if args quantity are less than arity return a new curried function
      
      return function(...remaininArgs) {
        return curried(...args,...remaininArgs);
      }
    } else { // if all arguments are received return the original function passing these arguments
      return func(...args)
    }
  }
}

function multiply(a, b, c) {
	return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24