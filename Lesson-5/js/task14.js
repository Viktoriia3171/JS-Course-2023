// Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести).

const minSumNumber = 1
const maxSumNumber = 100
const sum = Math.floor(Math.random() * (maxSumNumber - minSumNumber) + minSumNumber)
alert(` Вам потрібно сплатити ${sum} євро.`)

mainLoop: for (let userSummaryPaiment = 0; userSummaryPaiment !== sum;) {
   let userMoney = parseFloat(prompt("Введіть кількість грошей, яку бажаєте сплатити."))
   userSummaryPaiment += userMoney
   for (let moneyReminder = sum - userSummaryPaiment; moneyReminder > 0;) {
      alert(`Вам залишилось сплатити ${moneyReminder} євро.`)
      continue mainLoop
   }
   if (userSummaryPaiment >= sum) {
      alert(`Дякуємо за покупку!`)
      break
   }
}
