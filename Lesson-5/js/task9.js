// Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача (використати confirm).

const userNumber = parseInt(prompt('Загадайте будь-яке число від 1 до 10'))

let rightAnswer = false

while (rightAnswer != true) {
   let compRandomNumber = Math.floor(Math.random() * 10 + 1)
   rightAnswer = confirm(`Загадане Вами число ${compRandomNumber}?`)
   if (rightAnswer === true)
      alert(`Загадане Вами число ${compRandomNumber}!`)
}