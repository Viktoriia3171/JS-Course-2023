// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою.

const arrayLength = 30
function getArray(arrayLength) {
   let arr = []
   for (let i = 0; i < arrayLength; i++) {
      const randomNumber = Math.floor(Math.random() * 100 + 1)
      arr.push(randomNumber)
   }
   return arr
}

const array = getArray(arrayLength)

let changedArray
let counter = 0
do {
   changedArray = false
   for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
         let variable = array[j - 1]
         array[j - 1] = array[j]
         array[j] = variable
         changedArray = true
         counter++
      }
   }
}
while (changedArray)

console.log(array)
console.log(counter)