// Дано масив елементів. Вивести на екран елементи, що більші за 100

const userElementsNumber = parseInt(prompt("Введіть кількість елементів:"))

let arr = new Array(userElementsNumber)

function getUserElements(arr) {
   let userElement
   for (let i = 0; i < arr.length; i++) {
      userElement = parseInt(prompt(`Введіть ${i + 1} елемент:`))
      arr[i] = userElement
   }
   return arr
}

const userElementsList = getUserElements(arr)

function getMoreThanHundred(userElementsList) {
   for (let moreThanHundred of userElementsList) {
      if (moreThanHundred > 100)
         console.log(moreThanHundred)
   }
}

const moreThan100 = getMoreThanHundred(userElementsList)

