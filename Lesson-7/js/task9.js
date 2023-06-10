// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

const userTempNumber = parseInt(prompt("Скільки показників температури ви хочете ввести?"));
let temperature;
let minusTemperature = 0;

function getMinusTemperature() {
   for (let i = 0; i <= userTempNumber - 1; i++) {
      temperature = parseFloat(prompt("Введіть показник температури."))
      if (temperature < 0) {
         minusTemperature++
      }
   }
   return `${minusTemperature}`
}

document.write("Кількість від'ємних показників температури - " + getMinusTemperature())