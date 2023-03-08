// Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

const userFirstNumber = parseInt(prompt('Задайте початкове значення діапазону чисел'))
const userSecondNumber = parseInt(prompt('Задайте кінцеве значення діапазону чисел'))

let sumOfOddNumbers = 0
let oddNumbers = 0

for (let counter = userFirstNumber; counter < userSecondNumber; counter++) {
   if (counter % 2 !== 0 && oddNumbers <= 5) {
      sumOfOddNumbers = sumOfOddNumbers + counter
      oddNumbers++

   } else if (oddNumbers === 5) break;
}

document.write(`Початкове значення діапазону - ${userFirstNumber} <br>
Кінцеве значення діапазону - ${userSecondNumber} <br>
Сума перших п'яти непарних чисел становить - ${sumOfOddNumbers}`)