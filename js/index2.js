// 1
const hasElem = (arr, item) => arr.includes(item);

// 2
const arr2 = [2, 5, 9, 11, 15];
const number = 52;
// console.log(hasElem(arr2, number));

// 3
const hasTwoNumbers = (arr) => {
  if (arr.length < 2) {
    return false;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
};
const arr3 = [1, 2, 3, 3];
// console.log(hasTwoNumbers(arr3));

// 4
const MIN_VALUE = 15;
const MAX_VALUE = 78;
const myRandom = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const arr4 = [];
for (let i = 0; i < 10; i++) {
  arr4.push(myRandom(MAX_VALUE, MIN_VALUE));
}
// console.log(arr4);

// 5
const getMaxOfArray = (arr) => Math.max.apply(null, arr);
const getMinOfArray = (arr) => Math.min.apply(null, arr);
const arr5 = [4, -2, 5, 19, -130, 0, 10];
console.log(getMaxOfArray(arr5));
console.log(getMinOfArray(arr5));
