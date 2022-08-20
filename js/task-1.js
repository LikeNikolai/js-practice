// Напишите программу, которая получит от пользователя
// //число (количество минут) и выведет в консоль
// //строку в формате часов и минут
// //
/*const mins = prompt("Введіть кількість хвилин.");
function timeNormalization(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const normalizedHours = String(hours).padStart(2, 0);
  const normalizedMinutes = String(minutes).padStart(2, 0);
  const normalizedTime = `${normalizedHours} : ${normalizedMinutes}`;
  return normalizedTime;
}

console.log(timeNormalization(mins));*/
/*const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let totalPrice = 0;
  totalPrice = products.price * products.quantity;
  return propName === products.name ? totalPrice : [];*/

function addOverNum(one, ...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }
  return total;
}
console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
