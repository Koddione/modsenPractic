//Check your arguments
function objectType(...args) {
  const obj = args.length === 0 ? null : args[0];
  return Object.prototype.toString.call(obj);
}

//For the sake of argument
const numbers = (...args) => args.every((el) => typeof el === "number");

//Make the Deadfish Swim
function parse(data) {
  const result = [];
  let first = 0;
  const deadFish = {
    i: () => first++,
    d: () => first--,
    s: () => (first *= first),
    o: () => result.push(first),
  };
  for (const char of data) {
    if (deadFish[char]) {
      deadFish[char]();
    }
  }
  return result;
}

//Unpacking Arguments
function spread(func, args) {
  return func(...args);
}
