// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

const userNumber_1 = parseFloat(prompt("Введіть перше число:"))
const userNumber_2 = parseFloat(prompt("Введіть друге число:"))
const userNumber_3 = parseFloat(prompt("Введіть третє число:"))

document.write(`Перше число - ${userNumber_1}. <br> Друге число - ${userNumber_2}. <br> Третє число - ${userNumber_3}. <br>`)

function getEvenNumbers() {
   let evenNumbers = 0
   if (userNumber_1 % 2 === 0) {
      evenNumbers++
   }
   if (userNumber_2 % 2 === 0) {
      evenNumbers++
   }
   if (userNumber_3 % 2 === 0) {
      evenNumbers++
   }
   return `Кількість парних чисел - ${evenNumbers}.`
}

function getPositiveNumbers() {
   let positiveNumbers = 0
   if (userNumber_1 > 0) {
      positiveNumbers++
   }
   if (userNumber_2 > 0) {
      positiveNumbers++
   }
   if (userNumber_3 > 0) {
      positiveNumbers++
   }
   return `Кількість додатніх чисел - ${positiveNumbers}.`
}

function getBigNumbers() {
   let bigNumbers = 0
   if (userNumber_1 > 100) {
      bigNumbers++
   }
   if (userNumber_2 > 100) {
      bigNumbers++
   }
   if (userNumber_3 > 100) {
      bigNumbers++
   }
   return `Кількість чисел, більших за сто - ${bigNumbers}.`
}

function getResult() {
   return `${getEvenNumbers()} <br> ${getPositiveNumbers()} <br> ${getBigNumbers()}`
}

document.write(getResult())