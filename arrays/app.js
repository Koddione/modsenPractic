//Remove the minimum
function removeSmallest(numbers) {
  const arr = [...numbers];
  const min = Math.min(...numbers);
  const index = arr.indexOf(min);
  arr.splice(index, 1);
  return arr;
}

//Find the position!
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

//Highest and lowest
function highAndLow(numbers) {
  const arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

//Sum of Array Averages
const sumAverage = (array) => {
  return Math.floor(
    array.reduce(
      (sum, arr) => sum + arr.reduce((acc, el) => acc + el, 0) / arr.length,
      0
    )
  );
};

//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  const arrPositive = input.filter((el) => el > 0);
  const sumNegative = input
    .filter((el) => !arrPositive.includes(el))
    .reduce((acc, el) => acc + el, 0);
  return [arrPositive.length, sumNegative];
}

//Дополнительные задачи
//1. Ситуация: У вас есть массив чисел, и вы хотите получить новый массив, который будет содержать только положительные числа.
const arr = [-10, 5, 0, 3, -1, 8, -7];
const positivNumbers = arr.filter((el) => el > 0);
console.log(positivNumbers);

//2. Ситуация: У вас есть массив имен, и вы хотите создать новый массив, в котором каждое имя будет записано в верхнем регистре.​
const array = ["alice", "bob", "charlie", "david"];
const upperCaseNames = array.map((el) => el.toUpperCase());
console.log(upperCaseNames);
