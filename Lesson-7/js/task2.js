// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.

const userDayNumber = parseInt(prompt("Введіть номер дня:", 1))

function getDayInfo(dayInfo) {
   switch (dayInfo) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
         return "Це робочий день."
      case 6:
      case 7:
         return "Це вихідний день."
      default:
         return "Тиждень має всього сім днів."
   }
}

document.write(getDayInfo(userDayNumber))