// Записать массив, const arr = [“BEST”, “the”, “foo”, “is”,  “JS” ]
// развернуть массив,
// вырезать foo,
// перевести его в строку разделенную пробелами

// const arr = ["BEST", "the", "foo", "is", "JS"];

// function arrToStr(array, val) {
//   return array
//     .reverse()
//     .join(" ")
//     .replace(val + " ", "");
// }
// console.log(arrToStr(arr, "foo"));

// const arr = ["BEST", "the", "foo", "is", "JS"];
// function arrToStr2(array, val) {
//   const newArray = [];

//   for (const item of array) {
//     if (item !== val) {
//       newArray.unshift(item);
//     }
//   }
//   return newArray.join(" ");
// }
// console.log(arrToStr2(arr, "foo"));

// const arr = ["BEST", "the", "foo", "is", "JS"];

// function arrToStr3(array, val) {
//   const newArr = [...array];
//   newArr.splice(newArr.indexOf(val), 1);
//   return newArr.reverse().join(" ");
// }
// console.log(arrToStr3(arr, "foo"));

// const arr = ["BEST", "the", "foo", "is", "JS"];

// function arrToStr4(array, val) {
//   const idxVal = array.indexOf(val);
//   return array
//     .slice(0, idxVal)
//     .concat(array.slice(idxVal + 1))
//     .reverse()
//     .join(" ");
// }
// console.log(arrToStr4(arr, "foo"));
