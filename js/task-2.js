// В переменной min лежит число от 0 до 60.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

const numUser = Number(prompt("Ведіть число від 0 до 60."));
// function quarterChecker(num) {
//   if (num >= 0 && num <= 15) {
//     // alert(`Ваше число ${num} знаходиться в першій чверті.`);
//     return `Ваше число ${num} знаходиться в першій чверті.`;
//   }
//   if (num >= 16 && num <= 30) {
//     // alert(`Ваше число ${num} знаходиться в другій чверті.`);
//     return `Ваше число ${num} знаходиться в другій чверті.`;
//   }
//   if (num >= 31 && num <= 45) {
//     // alert(`Ваше число ${num} знаходиться в третій чверті.`);
//     return `Ваше число ${num} знаходиться в третій чверті.`;
//   }
//   if (num >= 46 && num <= 60) {
//     // alert(`Ваше число ${num} знаходиться в четвертій чверті.`);
//     return `Ваше число ${num} знаходиться в четвертій чверті.`;
//   }
//   // alert(`Ваше число ${num} не відповідає умові.`);
//   return `Ваше число ${num} не відповідає умові.`;
// }
// ======================================================================================
// function quarterChecker(num) {
//   if (num === 0) {
//     alert(`Ваше число ${num} знаходиться в першій чверті.`);
//     return;
//   }
//   switch (Math.floor((num - 1) / 15)) {
//     case 0:
//       alert(`Ваше число ${num} знаходиться в першій чверті.`);
//       break;

//     case 1:
//       alert(`Ваше число ${num} знаходиться в другій чверті.`);
//       break;

//     case 2:
//       alert(`Ваше число ${num} знаходиться в третій чверті.`);
//       break;

//     case 3:
//       alert(`Ваше число ${num} знаходиться в четвертій чверті.`);
//       break;
//     default:
//       alert(`Ваше число ${num} не відповідає умові.`);
//   }
// }

// console.log(quarterChecker(numUser));
