console.log("Hello World");
let greet = (name) => "Hi " + name;
console.log(greet("John"));

let isEven = (num) => num % 2 === 0;
console.log(isEven);

let counterFunc = (counter) => {
  if (counter > 100) {
    counter = 0;
  } else {
    counter++;
  }

  return counter;
};
console.log(counterFunc(200));

let nameAge = (name, age) => {
  console.log(`Hello ${name}\nYou are ${age} years old`);
};
console.log(nameAge("Jeff", 44));

let printOnly = () => "printing";
console.log(printOnly);

let sum = (num1, num2) => num1 + num2;

console.log(sum(2, 5));
