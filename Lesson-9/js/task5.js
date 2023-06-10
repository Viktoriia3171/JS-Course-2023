// Дано масив елементів. Знайти добуток додатних елементів

const userElementsNumber = parseInt(prompt("Введіть кількість елементів:"))

let arr = new Array(userElementsNumber)

function getUserElements(arr) {
   let userElements
   for (let i = 0; i < arr.length; i++) {
      userElements = parseInt(prompt(`Введіть ${i + 1} елемент:`))
      arr[i] = userElements
   }
   return arr
}

const userElementsList = getUserElements(arr)

function getPositiveNumbers(userElementsList) {
   let positiveArr = []
   for (let positiveNumbers of userElementsList) {
      if (positiveNumbers > 0)
         positiveArr.push(positiveNumbers)
   }
   return positiveArr
}

const positiveNumbersList = getPositiveNumbers(userElementsList)

function getProducts(positiveNumbersList) {
   let product = 1
   for (let i = 0; i < positiveNumbersList.length; i++) {
      product = product * positiveNumbersList[i]
   }
   return product
}

const totalProduct = getProducts(positiveNumbersList)

console.log(totalProduct)

