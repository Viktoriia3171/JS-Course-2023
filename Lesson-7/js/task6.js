// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

const userRowNumber = parseInt(prompt("Введіть кількість рядків у таблиці:"))
const userColumnNumber = parseInt(prompt("Введіть кількість стовпців у таблиці:"))
const userFixedText = prompt("Введіть фіксоване повідомлення.")

function getTable(userRowNumber, userColumnNumber, userFixedText) {
   document.write(`<table>`)
   for (let stringNumber = 1; stringNumber <= userRowNumber; stringNumber++) {
      document.write(`<tr>`)
      for (let columnNumber = 1; columnNumber <= userColumnNumber; columnNumber++) {
         document.write(`<td> ${userFixedText}</td>`)
      }
      document.write(`</tr>`)
   }
   document.write(`</table>`)
}
getTable(userRowNumber, userColumnNumber, userFixedText)

