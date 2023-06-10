// Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.

const userField = parseInt(prompt("Введіть кількість клітинок поля:")) // (5)
const userShips = parseInt(prompt("Введіть кількість одиночних кораблів:")) // (3)

// Створити масив з кількістю клітинок
let field = []

for (let i = 0; i < userField; i++) {
   field.push(0)
}

for (let i = 0; i < userShips; i++) {
   let randomField = Math.floor(Math.random() * userField)
   if (field[randomField] !== 1) {
      field[randomField] = 1
   }
   else {
      i--
   }
}

let totalShips = userShips
while (totalShips > 0) {
   const userAttempt = parseInt(prompt("Введіть номер клітинки, в якій на вашу думку є корабель:"))
   if (field[userAttempt - 1] === 1) {
      alert('Ви потопили корабель!');
      field[userAttempt - 1] = 'X';
      totalShips--
   }
   else if (field[userAttempt - 1] === 0) {
      alert('Промах!');
      field[userAttempt - 1] = '-';
   }
   else {
      alert('Ви вже стріляли в цю клітинку!')
   }
}

alert('Ви потопили всі кораблі!')
document.write(`Розташування кораблів (Х): <br> ${field}.`)