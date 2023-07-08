//  Дано інформацію про прибуток К магазинів протягом тижня.

const userNumberShops = parseInt(prompt("Введіть кількість магазинів:"))
const week = 7

function getMoneyOfTheWeek(userNumberShops, week) {
   let shopsArray = []
   for (let i = 0; i < week; i++) {
      let money = []
      for (let j = 0; j < userNumberShops; j++) {
         let randomValue = Math.floor(Math.random() * 1000 + 1)
         money.push(randomValue)
      }
      shopsArray.push(money)
   }
   return shopsArray
}
const moneyOfTheWeek = getMoneyOfTheWeek(userNumberShops, week)

console.log(moneyOfTheWeek)

// Знайти загальний прибуток кожного магазину за тиждень

function getShopsArray(userNumberShops, week, moneyOfTheWeek) {
   let weeksMoney = []
   for (let i = 0; i < userNumberShops; i++) {
      let shop = []
      for (let j = 0; j < week; j++) {
         shop.push(moneyOfTheWeek[j][i])
      }
      weeksMoney.push(shop)
   }
   return weeksMoney
}
const shopsArray = getShopsArray(userNumberShops, week, moneyOfTheWeek)

function getSumOfTheWeek(userNumberShops, shopsArray) {
   let shopsWeeksMoney = []
   let sum = 0
   for (let i = 0; i < userNumberShops; i++) {
      sum = shopsArray[i].reduce((prevSum, element) => prevSum + element)
      shopsWeeksMoney.push(sum)
   }
   return shopsWeeksMoney
}
const sumOfTheWeek = getSumOfTheWeek(userNumberShops, shopsArray)

console.log(shopsArray)
console.log("Загальний прибуток кожного магазину за тиждень:")
console.log(sumOfTheWeek)

// Знайти загальний прибуток усіх магазинів по дням (понеділок, вівторок і т.д.)

function getDaysMoney(moneyOfTheWeek) {
   let shopsDaysMoney = []
   let sum = 0
   for (let j = 0; j < moneyOfTheWeek.length; j++) {
      sum = moneyOfTheWeek[j].reduce((prevSum, element) => prevSum + element)
      shopsDaysMoney.push(sum)
   }
   return shopsDaysMoney
}
const daysMoney = getDaysMoney(moneyOfTheWeek)

console.log("Загальний прибуток кожного магазину по дням:")
console.log(daysMoney)

// Знайти загальний прибуток за робочі дні
// Знайти загальний прибуток за вихідні дні

const workDays = 5
let sumOfWorkingDays = 0
let sumOfWeekends = 0

for (let i = 0; i < daysMoney.length; i++) {
   if (i < workDays) {
      sumOfWorkingDays += daysMoney[i]
   }
   else {
      sumOfWeekends += daysMoney[i]
   }
}
console.log("Загальний прибуток за робочі дні:")
console.log(sumOfWorkingDays)
console.log("Загальний прибуток за вихідні дні:")
console.log(sumOfWeekends)

// Знайти максимальний прибуток за середу

function getMaxOfWednesday(moneyOfTheWeek) {
   return Math.max.apply(null, moneyOfTheWeek[2])
}
const maxOfWednesday = getMaxOfWednesday(moneyOfTheWeek)
console.log("Максимальний прибуток за середу становить ")
console.log(maxOfWednesday)

// Сформувати загальний спикок (масив) зі значенням, більшим за 200

function getAllNumbers(shopsArray) {
   let allNumbers = []
   for (let i = 0; i < shopsArray.length; i++) {
      for (let j = 0; j < shopsArray[i].length; j++) {
         allNumbers.push(shopsArray[i][j])
      }
   }
   return allNumbers
}
const allNumbersArray = getAllNumbers(shopsArray)


const moreThan200 = allNumbersArray.filter((element) => element > 200)
console.log("Загальний список зі значеннями, що більші за 200:")
console.log(moreThan200)

// Відсортувати кожен тиждень за зростанням 

const weeksSortedArray = shopsArray.map((weeksSort) => {
   return weeksSort.slice().sort((a, b) => a - b)
})

// Відсортувати тижні за спаданням максимального елемента у цьому тижні , тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

weeksSortedArray.sort((a, b) => {
   const maxA = Math.max(...a)
   const maxB = Math.max(...b)

   return maxB - maxA
})
console.log("Відсортований кожен тиждень за зростанням, а також за спаданням максимального елемента у цьому тижні:")
console.log(weeksSortedArray)

// Упорядкувати тижні за спаданням суми елементів у рядку

const sortBySum = shopsArray.sort((a, b) => {
   const sumA = a.reduce((prevSum, element) => prevSum + element, 0)
   const sumB = b.reduce((prevSum, element) => prevSum + element, 0)
   return sumB - sumA
})

console.log("Відсортований кожен тиждень за спаданням суми елементів у рядку:")
console.log(sortBySum)