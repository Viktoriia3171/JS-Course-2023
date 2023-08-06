// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
const arrayLength = 30


function getArray(arrayLength) {
   let arr = []
   for (let i = 0; i < arrayLength; i++) {
      let randomNumber = Math.floor(Math.random() * 100 + 1)
      arr.push(randomNumber)
   }
   return arr
}

const array = getArray(arrayLength)

function getCounter(array) {
   let counter = 0
   for (let i = 1; i < array.length; i++) {
      const variable = array[i]
      let j = i - 1
      while (j >= 0 && array[j] > variable) {
         array[j + 1] = array[j]
         j--
         counter++
      }
      array[j + 1] = variable
   }
   return counter
}

const numberOfSlam = getCounter(array)
console.log(array)
console.log(numberOfSlam)