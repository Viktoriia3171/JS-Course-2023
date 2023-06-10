// Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

const userElementsNumber = parseInt(prompt("Скільки цін ви хочете ввести?"))

let prices = new Array(userElementsNumber)

function getUserPrices(prices) {
   let userPrices
   for (let i = 0; i < prices.length; i++) {
      userPrices = parseFloat(prompt(`Введіть ${i + 1} ціну:`))
      prices[i] = userPrices
   }
   return prices
}

const userPricesList = getUserPrices(prices)

prices.forEach((element, index, pricesRes) => {
   const discount = element * 30 / 100
   if (element > 1000)
      pricesRes[index] = element - discount
})

console.log(prices)