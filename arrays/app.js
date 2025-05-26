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

//3. Ситуация: У вас есть массив чисел, и вам нужно отсортировать его в порядке возрастания.​
const numbers = [5, 3, 8, 1, 4];
console.log(numbers.sort());

//4. Ситуация: У вас есть массив чисел, и вам нужно вычислить их сумму.​
const numbersSum = [10, 20, 30, 40, 50];
console.log(numbersSum.reduce((acc, el) => acc + el, 0));

//5. Ситуация: Вы разрабатываете приложение для управления ​задачами. Вам нужно создать список дел и реализовать ​несколько функций для работы с ним.​
const tasks = [
  "Купить продукты",
  "Сделать домашнее задание",
  "Позвонить другу",
];
console.log(tasks.length);

tasks.push("Убраться в комнате");

//6. Ситуация: Вы разрабатываете систему фильтрации сообщений, и вам нужно проверить, содержит ли сообщение какое-либо из запрещённых слов.​
const forbiddenWords = ["spam", "advertisement", "scam"];
const message = "This is a spam message";
console.log(forbiddenWords.some((word) => message.includes(word)));
forbiddenWords.shift();
console.log(forbiddenWords);
