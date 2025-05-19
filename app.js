//Дополнительные задачи по темам
const firstTusk = () => {
  console.log(x);
  console.log(y);

  const hoistingTest = () => {
    console.log(x);
    console.log(y);

    var x = "x";
    let y = "y";

    console.log(x);
    console.log(y);
  };

  hoistingTest();

  console.log(x);
  console.log(y);
};

// firstTusk();

/*
3 - x is not defiend 
4 - y is not defiend
7 - undefiend
8 - ReferenceError
13 - x
14 - y
19 - x is not defiend 
20 - y is not defiend 

инциализация x - это старый способ обьявлеие переменных,
которая имеет функциональную область видимости, и может "всплывать"
при помощи hoisting. Из-за чего при обращении в функции выше чем она 
была обьявлена, переменной присвоиться undefiend, когда обращение к y выозвет ошибка (TDZ)
В остальныъх же случаях, как и с y(у let блочная область видимости)
попытка обратиться к переменным вызовет ошибку.
При обращении в ф-ции ниже инициализации мы получим корректные данные,
которые были вложены в эти переменные.
*/

const secondTusk = () => {
  const a = 1;

  if (true) {
    var b = 2;
  }

  console.log(a + b); //3
};

// secondTusk();

const thirdTusk = () => {
  console.log(a); //undefiend

  if (true) {
    var a = 5;
  }

  console.log(a); //5
};

// thirdTusk();

const fourthTusk = () => {
  var str1 = "Привет";
  var str2 = "Илья";
  console.log(`${str1}, ${str2}`);
};

// fourthTusk();

const fifthTusk = () => {
  let a = 1;
  console.log(`Значение переменной а - ${a}`);
};

// fifthTusk();

const sixthTusk = () => {
  let a = 5;

  if (true) {
    a = 10;
  }

  function foo() {
    console.log(a); //10
  }

  foo();
};

// sixthTusk();

const seventhTusk = () => {
  if (true) {
    var a;
  }

  function foo() {
    console.log(a); // undefiend
  }

  foo();

  a = 10;
};

// seventhTusk();

const eighthTusk = () => {
  function foo() {
    var a = 10;
  }

  if (true) {
    var b = 10;
  }

  console.log(a); //referenceError
  console.log(b); //10
};

// eighthTusk();

//Convert a Boolean to a String
function booleanToString(b) {
  return b ? "true" : "false";
}

//Is it even?
function testEven(n) {
  return n % 2 === 0;
}

//Area or Perimeter
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l + w) * 2;
};

//Quarter of the year
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

//Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

//Counting sheep...
function countSheeps(sheep) {
  return sheep.filter((item) => Boolean(item)).length;
}

//Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  const winObj = {
    scissors: "paper",
    paper: "rock",
    rock: "scissors",
  };

  return winObj[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};

//Cat years, Dog years
const humanYearsCatYearsDogYears = function (humanYears) {
  const cat =
    humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 4;
  const dog =
    humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 5;
  return [humanYears, cat, dog];
};

//Sum of Multiples
function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  let sum = 0;
  for (let i = n; i < m; i += n) sum += i;
  return sum;
}

//Build a square
function generateShape(integer) {
  return Array(integer).fill("+".repeat(integer)).join("\n");
}

//Array plus array
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, num) => acc + num, 0);
}
