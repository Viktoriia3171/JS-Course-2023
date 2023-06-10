// Створити окремі функції, які для 4 чисел знаходять:
// 1. Суму;
// 2. Добуток;
// 3. Середнє арифметичне;
// 4. Мінімальне значення.

const userNumber_1 = parseFloat(prompt('Введіть перше число:'))
const userNumber_2 = parseFloat(prompt('Введіть друге число:'))
const userNumber_3 = parseFloat(prompt('Введіть третє число:'))
const userNumber_4 = parseFloat(prompt('Введіть четверте число:'))

function getSum(userNumber_1, userNumber_2, userNumber_3, userNumber_4) {
   const numbersSum = userNumber_1 + userNumber_2 + userNumber_3 + userNumber_4
   return numbersSum;
}

function getProduct(userNumber_1, userNumber_2, userNumber_3, userNumber_4) {
   const numbersProduct = userNumber_1 * userNumber_2 * userNumber_3 * userNumber_4
   return numbersProduct;
}

function getAverage(userNumber_1, userNumber_2, userNumber_3, userNumber_4) {
   const numbersAverage = (userNumber_1 + userNumber_2 + userNumber_3 + userNumber_4) / 4
   return numbersAverage;
}

function getMin(userNumber_1, userNumber_2, userNumber_3, userNumber_4) {
   const minNumber = Math.min(userNumber_1, userNumber_2, userNumber_3, userNumber_4)
   return minNumber;
}

document.write(`Сума цих чисел = ${getSum(userNumber_1, userNumber_2, userNumber_3, userNumber_4)}. <br>`)
document.write(`Добуток цих чисел = ${getProduct(userNumber_1, userNumber_2, userNumber_3, userNumber_4)}. <br>`)
document.write(`Середнє арифметичне цих чисел = ${getAverage(userNumber_1, userNumber_2, userNumber_3, userNumber_4)}. <br>`)
document.write(`Мінімальне значення цих чисел = ${getMin(userNumber_1, userNumber_2, userNumber_3, userNumber_4)}.`)