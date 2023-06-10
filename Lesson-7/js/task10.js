// Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

const userTempNumber = parseFloat(prompt("Скільки показів температур ви хочете ввести?"))

function getAverageTemperature() {
   let positiveTemperature = 0;
   let averageTemperature = 0;
   for (let i = 0; i <= userTempNumber - 1; i++) {
      const temperature = parseFloat(prompt("Введіть показник температури."))
      if (temperature > 0) {
         positiveTemperature += temperature
         averageTemperature++
      }
   }

   return positiveTemperature / averageTemperature;
}

document.write("Середнє значення додатніх показів температур - " + getAverageTemperature())