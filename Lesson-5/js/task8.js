// Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).

const userNumber = parseInt(prompt(`Загадайте будь-яке ціле число від 1 до 10`))

let compAttempt = 1
let rightAnswer = false

while (compAttempt <= 3 && rightAnswer != true) {
   let compRandomNumber = Math.floor(Math.random() * 10 + 1)
   rightAnswer = confirm(` Спроба №${compAttempt}. Це число ${compRandomNumber} ?`)
   if (rightAnswer === true) alert(` Загадане Вами число ${compRandomNumber}`)
   compAttempt++
   if (compAttempt > 3 && rightAnswer != true) alert(` Ми не змогли вгадати число`)
}








