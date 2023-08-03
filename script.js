// 1  Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое.
let num = Number(prompt("Enter a whole number:"));
function doublePositiveNumber(num) {
  if (isNaN(num)) {
    alert("You should enter a whole number:");
    return;
  }
  if (num > 0) {
    return num * 2;
  } else {
    return num;
  }
}
console.log(doublePositiveNumber(num));

// 2 Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе,
// второе – количество стульев в кабинете.  Программа проверит соответствие между этими двумя значениями
// и выведет на экран соответствующую информацию. ввод: 24, 28 ⇒ вывод: стульев хватает;
// ввод: 24, 22 ⇒ вывод: стульев не хватает

let chairs = Number(prompt("Enter the number of chairs:"));
let students = Number(prompt("Enter the number of students:"));
function availabilityOfClass(chairs, students) {
  if (isNaN(num)) {
    alert("You should enter a whole number:");
    return;
  }
  if (chairs >= students) {
    console.log("the lecture is possible");
  } else {
    console.log("the lecture is not possible");
  }
}
availabilityOfClass(chairs, students);

// 3 Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке.
//  Перед началом вывода на экран следует вывести "старт", а после окончания вывода чисел – "финиш“.
//  вывод: старт, 1, … 9, финиш
let arr = [1, 568, 4, 7, 2, 3, 9, 5, 13, 15, 19, 22, 75];

function positiveNumber(numbers) {
  numbers.sort((a, b) => a - b);
  console.log("start");
  for (let num of numbers) {
    if (num < 10 && num > 0) {
      console.log(num);
    }
  }
  console.log("end");
}
positiveNumber(arr);

// Написать цикл, который выводит те числа из массива, которые больше или равны 15.
let arr2 = [1, 568, 4, 7, 2, 3, 9, 5, 13, 15, 19, 22, 75];
function moreThan15(numbers) {
  for (let num of numbers) {
    if (num >= 15) {
      console.log(num);
    }
  }
}
moreThan15(arr2);

// Написать цикл, который выводит только нечетные числа массива.
let array = [1, 2, 3, 4, 5, 6, 7, 8];

function oddNumbers(numbers) {
  for (let num of numbers) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
}
oddNumbers(array);

// Вывести только те значения массива, индекс которых кратен трем.
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "apple"];
function floorDivisionBy3(array) {
  for (let index = 1; index < array.length; index++) {
    if (index % 3 == 0) {
      console.log(array2[index]);
    }
  }
}
floorDivisionBy3(array2);

// Найти сумму чисел, чей индекс равен значению элемента.

let array3 = [1, 2, 2, 4, 4, 6, 7, 7, 8, "apple"];
function floorDivisionBy3(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      continue;
    }
    if (i === array[i]) {
      sum += array[i];
    }
  }
  console.log(sum);
}
floorDivisionBy3(array3);

// Найти сумму нечетных чисел и вывести в консоль.

let array4 = [1, 2, 2, 4, 4, 6, 7, 7, 8, "apple"];
function sumofOdds(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      continue;
    }
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  console.log(sum);
}
sumofOdds(array4);

// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.

let array5 = [1, 2, 2, 4, 4, 6, 7, 7, 8, "apple"];
function oddEvenDifference(array) {
  let oddSum = 0;
  let evenSum = 0;
  let diff = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      continue;
    }
    if (array[i] % 2 !== 0) {
      oddSum += array[i];
    } else {
      evenSum += array[i];
    }
  }
  if (oddSum > evenSum) {
    diff = oddSum - evenSum;
  } else {
    diff = evenSum - oddSum;
  }
  console.log(diff);
}
oddEvenDifference(array5);
