// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000).

const pricesNumber = parseInt(prompt("Введіть кількість цін:"))

function getRandomPrices(pricesNumber) {
   let randomPrices = []
   for (let i = 0; i < pricesNumber; i++) {
      let price = Math.floor(Math.random() * 10000 + 1)
      randomPrices.push(price)
   }
   return randomPrices
}

const priceList = getRandomPrices(pricesNumber)
console.log("Масив з рандомними цінами:", priceList)

// Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

const moreThan1000 = priceList.filter(price => price > 1000)
console.log("Новий масив з елементами, більші за 1000:", moreThan1000)

// Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

const moreThan1000Index = priceList.reduce(function (result, element, index) {
   if (element > 1000) result.push(index)
   return result
}, []
)

console.log("Новий масив, у якому є номери тільки тих, що більші за 1000:", moreThan1000Index)

// Сформувати список з тих цін, які більші за попереднє значення

let moreThanPreviousValue = priceList.map(function (currentPrice, index, array) {
   if (index > 0 && currentPrice > array[index - 1]) {
      return currentPrice
   }
})

moreThanPreviousValue = moreThanPreviousValue.filter(function (price) {
   return price !== undefined
})

console.log("Cписок з тих цін, які більші за попереднє значення:", moreThanPreviousValue)

// Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального

const maxPrice = Math.max(...priceList)
const rateOfPrices = priceList.map(function (element) {
   let rate = element * 100 / maxPrice
   return rate.toFixed(2)
})

console.log("Новий масив, що містить значення цін у відсотках стосовно максимального:", rateOfPrices)

// Підрахувати кількість змін цін

const pricesChange = priceList.reduce(function (result, element, index) {
   if (element !== element[index - 1]) {
      result++
   }
   return result
}, [])

console.log("Кількість змін цін:", pricesChange)

// Визначити, чи є ціна, що менше 1000

const priceLessThan1000 = priceList.filter(price => price < 1000 ? true : false)

console.log("Ціна, що менше 1000:", priceLessThan1000)

// Визначати, чи усі ціни більше за 1000

const pricesMoreThan1000 = priceList.every(price => price > 1000 ? true : false)

console.log("Визначати, чи усі ціни більше за 1000:", pricesMoreThan1000)

// Підрахувати кількість цін, що більше за 1000

const moreThan1000Number = priceList.reduce(function (result, element) {
   if (element > 1000) {
      result++
   }
   return result
}, 0)

console.log("Кількість цін, що більше за 1000:", moreThan1000Number)

// Підрахувати суму цін, що більше за 1000

const sumOfMoreThan1000 = priceList.reduce(function (sum, element) {
   if (element > 1000) {
      sum += element
   }
   return sum
}, 0)

console.log("Сума цін, що більше за 1000:", sumOfMoreThan1000)

// Знайти першу ціну, що більше за 1000

const firstPriceMoreThan1000 = priceList.find(function (element) {
   return element > 1000
})

console.log("Перша ціна, що більше за 1000:", firstPriceMoreThan1000)

// Знайти індекс першої ціни, що більше за 1000

const firstIndexPriceMoreThan1000 = priceList.findIndex(function (element) {
   return element > 1000
})

console.log("Індекс першої ціни, що більше за 1000:", firstIndexPriceMoreThan1000)

// Знайти останню ціну, що більше за 1000

const lastPriceMoreThan1000 = priceList.reduceRight(function (lastChild, element) {
   if (element > 1000 && !lastChild) {
      return element
   }
   return lastChild
}, 0)

console.log("Остання ціна, що більше за 1000:", lastPriceMoreThan1000)

// Знайти індекс останньої ціни, що більше за 1000

const lastPriceIndex = priceList.reduceRight(function (lastChildIndex, element, index) {
   if (element > 1000 && !lastChildIndex) {
      return index
   }
   return lastChildIndex
}, 0)

console.log("Індекс останньої ціни, що більше за 1000:", lastPriceIndex)