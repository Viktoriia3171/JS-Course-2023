// Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
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

function getSwap(array) {
   let swapsCounter = 0
   let leftIndex = 0
   let rightIndex = array.length - 1
   while (leftIndex < rightIndex) {
      for (let i = leftIndex; i < rightIndex; i++) {
         if (array[i] > array[i + 1]) {
            let mixVariable = array[i + 1]
            array[i + 1] = array[i]
            array[i] = mixVariable
            swapsCounter++
         }
      }
      rightIndex--
      for (let i = rightIndex; i > leftIndex; i--) {
         if (array[i] < array[i - 1]) {
            let mixVariable = array[i - 1]
            array[i - 1] = array[i]
            array[i] = mixVariable
            swapsCounter++
         }
      }
      leftIndex++
   }
   console.log(swapsCounter)
   return array
}

const numberOfSwaps = getSwap(array)
console.log(numberOfSwaps)