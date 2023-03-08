// Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.

const workWeeks = parseInt(prompt("Введіть кількість робочих тижнів."))
const workDays = parseInt(prompt("Введіть кількість робочих днів у тижні."))
let allTheMoney = 0

for (let weekNumber = 1; weekNumber <= workWeeks; weekNumber++) {
   let moneyOfTheWeek = 0
   for (let dayNumber = 1; dayNumber <= workDays; dayNumber++) {
      let userMoney = parseFloat(prompt(`Введіть прибуток магазину у євро за ${dayNumber} день ${weekNumber} тижня.`))
      moneyOfTheWeek += userMoney
   }
   allTheMoney += moneyOfTheWeek
   alert(`Прибуток ${weekNumber} тижня становить ${moneyOfTheWeek} євро.`)
}
alert(`Загальна величина прибутку становить ${allTheMoney} євро.`)