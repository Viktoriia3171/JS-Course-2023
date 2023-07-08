// Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

const fieldArray = []
const fieldNumber = 6
for (let i = 0; i < fieldNumber; i++) {
   let fields = []
   for (let j = 0; j < fieldNumber; j++) {
      fields.push(0)
   }
   fieldArray.push(fields)
}

const shipsNumber = 5
function getRandomShipsPosition(shipsNumber, fieldArray) {
   let randomRow
   let randomColumn
   mainLoop: for (let i = 0; i < shipsNumber; i++) {
      randomRow = Math.floor(Math.random() * fieldNumber)
      randomColumn = Math.floor(Math.random() * fieldNumber)
      if (fieldArray[randomRow][randomColumn] === 0) {
         fieldArray[randomRow][randomColumn] = 1
      }
      else if (fieldArray[randomRow][randomColumn] === 1) {
         continue mainLoop
      }
   }
   return fieldArray
}
const shipsPositions = getRandomShipsPosition(shipsNumber, fieldArray)

const userBullets = Math.floor(Math.random() * 5 + 5)
alert("У вас є така кількість снарядів: " + userBullets)
let userWin = 0
for (let i = 0; i < userBullets; i++) {
   let userRow = prompt("Введіть номер рядка, у якому на вашу думку знаходиться корабель (0-5)", 0)
   let userColumn = prompt("Введіть номер стовпця, у якому на вашу думку знаходиться корабель (0-5)", 0)
   if (userWin === shipsNumber) {
      alert("Вітаємо! Ви потопили всі кораблі!")
      break
   }
   else if (fieldArray[userRow][userColumn] === 1) {
      alert("Вітаємо! Ви потопили корабель.")
      fieldArray[userRow][userColumn] = "x"
      userWin++
   }
   else if (fieldArray[userRow][userColumn] === 0) {
      alert("Тут немає корабля.")
   }
   else if (fieldArray[userRow][userColumn] === "x") {
      alert("Ви вже потопили тут корабель.")
      i--
   }
}

console.log(shipsPositions)
console.log("Кількість потоплених кораблів:")
console.log(userWin)