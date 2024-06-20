// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   return filteredNumbers;
// }

// function getCommonElements(array1, array2) {
//   const newArray = [];

// for (let i = 0; i < array1.length; i++) {
//   if (array2.includes(i)) {
//     newArray.push(array2[i]);
//   }
// }

//   for (let element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function getEvenNumbers(start, end) {
//   // Change code below this line

//   const result = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }

//   return result;

//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// function includes(array, value) {
//   // Change code below this line

//   for (let i = 0; i <= array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));

// function calculateTotal(number) {
//   // Change code below this line

//   let result = 0;

//   for (let i = 0; i <= number; i += 1) {
//     number += i;
//   }

//   return result;

//   // Change code above this line
// }

// console.log(calculateTotal(3));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   // Change code below this line

//   let makeArray = string.split(" ");

//   let longestWord = makeArray[0];

//   for (let makeArrays of makeArray) {
//     if (makeArrays.length > longestWord.length) {
//       longestWord = makeArrays;
//     }
//   }

//   return longestWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// function filterArray(numbers, value) {
//   // Change code below this line

//   const result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log();

// function getCommonElements(array1, array2) {
//   // Change code below this line

//   let newArray = [];

//   for (let elements of array1) {
//     if (array2.includes(elements)) {
//       newArray.push(elements);
//     }
//   }

//   return newArray;

//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let result of order) {
//     total += result;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 291]));
// console.log(calculateTotalPrice([]));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let copy of numbers) {
//     if (copy > value) {
//       filteredNumbers.push(copy);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getEvenNumbers(start, end) {
//   // Change code below this line

//   let result = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }

//   return result;

//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
