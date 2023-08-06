// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

const userNamesNumber = parseInt(prompt("Введіть кількість імен:", 5))

function getNamesArray(userNamesNumber) {
   let namesArray = []
   for (let i = 0; i < userNamesNumber; i++) {
      const userName = prompt("Введіть " + `${i + 1}` + " ім'я:")
      namesArray.push(userName)
   }
   return namesArray
}

const namesArray = getNamesArray(userNamesNumber)
namesArray.sort((a, b) => a.length - b.length)
console.log(namesArray)

const searchElement = 5

function is5Elements(namesArray, searchElement) {
   let start = 0
   let end = namesArray.length - 1
   while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (namesArray[middle].length === searchElement) {
         return `Шукане ім'я знаходиться під індексом ${middle}`
      }
      if (namesArray[middle].length < searchElement) {
         start = middle + 1
      }
      if (namesArray[middle].length > searchElement) {
         end = middle - 1
      }
   }
   return `Шуканого імені немає в списку.`
}

const result = is5Elements(namesArray, searchElement)
console.log(result)
