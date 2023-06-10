// Створити функцію, яка за номером місяця повертає його назву.

const userMonthNumber = parseInt(prompt("Введіть номер місяця:"))

function getMonthName(monthName) {
   switch (monthName) {
      case 1:
         return 'Це січень.'
      case 2:
         return 'Це лютий.'
      case 3:
         return 'Це березень.'
      case 4:
         return 'Це квітень.'
      case 5:
         return 'Це травень.'
      case 6:
         return 'Це червень.'
      case 7:
         return 'Це липень.'
      case 8:
         return 'Це серпень.'
      case 9:
         return 'Це вересень.'
      case 10:
         return 'Це жовтень.'
      case 11:
         return 'Це листопад.'
      case 12:
         return 'Це грудень.'
      default:
         return 'Такого номера місяця не існує.'
   }
}

document.write(getMonthName(userMonthNumber))