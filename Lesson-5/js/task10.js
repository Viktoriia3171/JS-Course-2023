// Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.

const userFirstNumber = parseInt(prompt('Задайте початкове значення діапазону чисел'))
const userSecondNumber = parseInt(prompt('Задайте кінцеве значення діапазону чисел'))
let sumOfOddNumbers = 0

for (let counter = userFirstNumber; counter <= userSecondNumber; counter++) {
   if (counter % 2 != 0)
      sumOfOddNumbers += counter
}
document.write(`Початкове значення діапазону - ${userFirstNumber} <br> Кінцеве значення діапазону - ${userSecondNumber} <br> Сума всіх непарних чисел в межах діапазону - ${sumOfOddNumbers}`)



