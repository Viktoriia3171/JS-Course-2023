//Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2.

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


for (let i = 0; i < userElementsList.length; i++) {
   if (userElementsList[i] > userElementsList[0]) {
      userElementsList[i] = userElementsList[i] * 2
   }
}

console.log(userElementsList)

