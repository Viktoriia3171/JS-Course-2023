// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

const userMonthNumber = parseInt(prompt("Введіть номер місяця:"))

function getSeason(month) {
   switch (month) {
      case 1:
      case 2:
      case 12:
         return 'Цей місяць відноситься до зимової пори року.';
      case 3:
      case 4:
      case 5:
         return 'Цей місяць відноситься до весняної пори року.';
      case 6:
      case 7:
      case 8:
         return 'Цей місяць відноситься до літньої пори року.';
      case 9:
      case 10:
      case 11:
         return 'Цей місяць відноситься до осінньої пори року.';
      default:
         return 'Такого місяця не існує.'
   }
}

document.write(getSeason(userMonthNumber))