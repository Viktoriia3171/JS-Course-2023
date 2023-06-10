// Дано масив імен. Сформувати масив з перших літер цих імен.

const userElementsNumber = parseInt(prompt("Скільки імен ви хочете ввести?"))

let userNames = new Array(userElementsNumber)

function getUserNamesList(userNames) {
   let name
   for (let i = 0; i < userNames.length; i++) {
      name = prompt(`Введіть ${i + 1}-е ім'я:`)
      userNames[i] = name
   }
   return userNames
}

const userNamesList = getUserNamesList(userNames)

let letters = []
for (let i = 0; i < userNamesList.length; i++) {
   letters.push(userNamesList[i][0])
}

console.log(letters)