// В переменной min лежит число от 0 до 60.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).

//const numUser = Number(prompt("Ведіть число від 0 до 60."));
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
/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) {
  }
  // Пиши код выше этой строки
  if (product === products.name) {
    calculateTotalPrice = products.price * products.quantity;
    return calculateTotalPrice;
  }
}*/
