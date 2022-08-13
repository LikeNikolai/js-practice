// Напишите программу, которая получит от пользователя
// //число (количество минут) и выведет в консоль
// //строку в формате часов и минут
// //
const mins = prompt("Введіть кількість хвилин.");
function timeNormalization(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const normalizedHours = String(hours).padStart(2, 0);
  const normalizedMinutes = String(minutes).padStart(2, 0);
  const normalizedTime = `${normalizedHours} : ${normalizedMinutes}`;
  return normalizedTime;
}

console.log(timeNormalization(mins));
