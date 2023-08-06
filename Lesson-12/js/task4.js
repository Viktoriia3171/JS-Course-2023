//Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.

const elementsNumber = 10
function getArray(elementsNumber) {
   let arr = []
   for (let i = 0; i < elementsNumber; i++) {
      let randomNumber = Math.floor(Math.random() * 100 + 1)
      arr.push(randomNumber)
   }
   return arr
}

const array = getArray(elementsNumber)
console.log("Початковий масив:")
console.log(array)
document.write("<br> Початковий масив: <br>" + "[" + `${array}` + "]<br>")

// Сортування бульбашкою
const bubbleArr = array.map((element) => element)

function getBubbleArray(bubbleArr) {
   let changedBubbleArray
   let bubbleCounter = 0
   document.write("<br> Сортування бульбашкою: <br>" + "[" + `${bubbleArr}` + "]<br>")
   do {
      changedBubbleArray = false
      for (let i = 1; i < bubbleArr.length; i++) {
         if (bubbleArr[i - 1] > bubbleArr[i]) {
            let bubbleVariable = bubbleArr[i - 1]
            bubbleArr[i - 1] = bubbleArr[i]
            bubbleArr[i] = bubbleVariable
            changedBubbleArray = true
            bubbleCounter++
            document.write(`<br>` + "[" + `${bubbleArr}` + "]" + `<br>`)
         }
      }
   }
   while (changedBubbleArray)
   document.write(`<br>` + "Обмінів під час сортування бульбашкою: " + `${bubbleCounter}` + `<br>`)
   console.log("Сортування бульбашкою:")
   console.log(bubbleArr)
   console.log(bubbleCounter)
   return bubbleArr
}
const bubbleArray = getBubbleArray(bubbleArr)

// Сортування змішуванням

const mixedArr = array.map((element) => element)

function getSwap(mixedArr) {
   document.write("<br> Сортування змішуванням: <br>" + "[" + `${mixedArr}` + "]<br>")
   let swapsCounter = 0
   let leftIndex = 0
   let rightIndex = mixedArr.length - 1
   while (leftIndex < rightIndex) {
      for (let i = leftIndex; i < rightIndex; i++) {
         if (mixedArr[i] > mixedArr[i + 1]) {
            let mixVariable = mixedArr[i + 1]
            mixedArr[i + 1] = mixedArr[i]
            mixedArr[i] = mixVariable
            document.write(`<br>` + "[" + `${mixedArr}` + "]" + `<br>`)
            swapsCounter++
         }
      }
      rightIndex--
      for (let i = rightIndex; i > leftIndex; i--) {
         if (mixedArr[i] < mixedArr[i - 1]) {
            let mixVariable = mixedArr[i - 1]
            mixedArr[i - 1] = mixedArr[i]
            mixedArr[i] = mixVariable
            document.write(`<br>` + "[" + `${mixedArr}` + "]" + `<br>`)
            swapsCounter++
         }
      }
      leftIndex++
   }
   document.write(`<br>` + "Обмінів під час сортування змішуванням: " + `${swapsCounter}` + `<br>`)
   console.log("Сортування змішуванням:")
   console.log(mixedArr)
   console.log(swapsCounter)
   return mixedArr
}


const swaps = getSwap(mixedArr)

// Сортування включенням

const putArray = array.map((element) => element)

function getPutArray(putArray) {
   document.write("<br> Сортування включенням: <br>" + "[" + `${mixedArr}` + "]<br>")
   let sortCounter = 0
   for (let i = 1; i < putArray.length; i++) {
      const sortVariable = putArray[i]
      let j = i - 1
      while (j >= 0 && putArray[j] > sortVariable) {
         putArray[j + 1] = putArray[j]
         j--

         document.write(`<br>` + "[" + `${putArray}` + "]" + `<br>`)
      }
      sortCounter++
      putArray[j + 1] = sortVariable
   }
   document.write(`<br>` + "Обмінів під час сортування включенням: " + `${sortCounter}` + `<br>`)
   console.log("Сортування включенням:")
   console.log(putArray)
   console.log(sortCounter)
   return putArray
}

const arr = getPutArray(putArray)