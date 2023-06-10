// Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

const userElementsNumber = parseInt(prompt("Скільки цін ви хочете ввести?"))

let userPrices = new Array(userElementsNumber)

function getUserPrices(userPrices) {
   let userPrice
   for (let i = 0; i < userPrices.length; i++) {
      userPrice = parseFloat(prompt(`Введіть ${i + 1} ціну:`))
      userPrices[i] = userPrice
   }
   return userPrices
}

const pricesList = getUserPrices(userPrices)

const tax = 0.2

function getSum(pricesList) {
   let sum = 0
   for (let i = 0; i < pricesList.length; i++) {
      sum += pricesList[i]
   }
   return sum
}

const totalSum = getSum(pricesList)
const userTax = totalSum * tax
const taxResult = [userTax.toFixed(2)]

console.log(pricesList, totalSum, taxResult)