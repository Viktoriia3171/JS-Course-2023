// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:

// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

const days = 7

// Зберігаємо відвідувачів у масив
function getVisitors() {
   let visitors = []
   for (let i = 0; i < days; i++) {
      let randomVisitorsNumber = Math.floor(1 + Math.random() * 100)
      visitors.push(randomVisitorsNumber)
   }
   return visitors
}

// номери днів, коли кількість відвідувачів була мінімальною;
let clients = getVisitors()
let minVisitorsNumber = Math.min(...clients)

function getMinVisitorsDay(clients) {
   let minResult = []
   for (let i = 0; i < clients.length; i++) {
      if (clients[i] === minVisitorsNumber) {
         minResult.push(i + 1)
      }
   }
   return minResult
}

// номери днів, коли кількість відвідувачів була максимальною;
let maxVisitorsNumber = Math.max(...clients)

function getMaxVisitorsDay(clients) {
   let maxResult = []
   for (let i = 0; i < clients.length; i++) {
      if (clients[i] === maxVisitorsNumber) {
         maxResult.push(i + 1)
      }
   }
   return maxResult
}

// номери днів, протягом яких кількість відвідувачів була меншою за 20;
function getLessValue(clients) {
   let lessValue = []
   for (let i = 0; i < clients.length; i++) {
      if (clients[i] < 20) {
         lessValue.push(i + 1)
      }
   }
   return lessValue
}

// загальну кількість клієнтів у робочі дні 
function getWorkDaysValue(clients) {
   let workDaysValue = []
   let sumWorkDays = 0
   for (let i = 0; i < 5; i++) {
      workDaysValue.push(clients[i])
      sumWorkDays += clients[i]
   }
   return sumWorkDays
}

// загальну кількість на вихідних
function getHolidaysValue(clients) {
   let holidaysValue = []
   let sumHolidays = 0
   for (let i = 0; i < clients.length; i++) {
      if (i >= 5) {
         holidaysValue.push(clients[i])
         sumHolidays += clients[i]
      }
   }
   return sumHolidays
}

document.write(`Кількість відвідувачів протягом тижня - ${clients}. <br> Дні, протягом яких кількість відвідувачів була менша за 20: ${getLessValue(clients)}. <br> Мінімальна кількість відвідувачів була ${getMinVisitorsDay(clients)}-ого дня. <br> Максимальна кількість відвідувачів була ${getMaxVisitorsDay(clients)}-ого дня. <br> Загальна кількість відвідувачів у робочі дні - ${getWorkDaysValue(clients)}. <br> Загальна кількість відвідувачів у вихідні дні - ${getHolidaysValue(clients)}.`)