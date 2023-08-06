// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.


const userNamesNumber = parseInt(prompt("Введіть кількість імен:", 5))

function getUserNames(userNamesNumber) {
   let namesArray = []
   for (let i = 0; i < userNamesNumber; i++) {
      const userName = prompt("Введіть " + `${i + 1}` + " ім'я:")
      namesArray.push(userName)
   }
   return namesArray
}

const namesArray = getUserNames(userNamesNumber)
namesArray.sort()
console.log(namesArray)

const searchElement = 'Olga'

function isOlga(namesArray, searchElement) {
   let start = 0
   let end = namesArray.length - 1
   while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (namesArray[middle] === searchElement) {
         return `Шукане ім'я знаходиться під індексом ${middle}`
      }
      if (namesArray[middle] < searchElement) {
         start = middle + 1
      }
      if (namesArray[middle] > searchElement) {
         end = middle - 1
      }
   }
   return `Шуканого імені немає в списку.`
}

const nameOlga = isOlga(namesArray, searchElement)
console.log(nameOlga)

