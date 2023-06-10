// Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

const year = 12

function getYearsPayment() {
   let yearsPayment = []
   for (let i = 0; i < year; i++) {
      let randomPayments = Math.floor(1 + Math.random() * 100)
      yearsPayment.push(randomPayments)
      totalSum += yearsPayment[i]
   }
   return yearsPayment
}

const totalPayments = getYearsPayment()

// Знайти сумарну кількість грошей за: за весь рік;
function getTotalSum(totalPayments) {
   let totalSum = 0
   for (let i = 0; i < totalPayments.length; i++) {
      totalSum += totalPayments[i]
   }
   return totalSum
}

const sumForYear = getTotalSum(totalPayments)

// Знайти сумарну кількість грошей за: у першій половині року;
function getSumFirstHalf(totalPayments) {
   let sumFirstHalf = 0
   for (let i = 0; i < 6; i++) {
      sumFirstHalf += totalPayments[i]
   }
   return sumFirstHalf
}

const sumOfFirstHalf = getSumFirstHalf(totalPayments)

// Знайти сумарну кількість грошей за: у другій половині року;
function getSumSecondHalf(totalPayments) {
   let sumSecondHalf = 0
   for (let i = 0; i < totalPayments.length; i++) {
      if (i > 5)
         sumSecondHalf += totalPayments[i]
   }
   return sumSecondHalf
}

const sumOfSecondHalf = getSumSecondHalf(totalPayments)

// Знайти сумарну кількість грошей за:  за літо;
function getSummerPayments(totalPayments) {
   let summerPayments = []
   for (let i = 0; i < totalPayments.length; i++) {
      if (i > 5 && i < 9) {
         summerPayments.push(totalPayments[i - 1])
      }
   }
   return summerPayments
}

const paymentsOfSummer = getSummerPayments(totalPayments)

function getSummerSum(paymentsOfSummer) {
   let summerSum = 0
   for (let i = 0; i < paymentsOfSummer.length; i++) {
      summerSum += paymentsOfSummer[i]
   }
   return summerSum
}

const sumOfSummer = getSummerSum(paymentsOfSummer)

// Знайти сумарну кількість грошей за: за ІІ квартал;
function getSecondQuartal(totalPayments) {
   let secondQuartal = []
   for (let i = 0; i < totalPayments.length; i++) {
      if (i > 3 && i < 7) {
         secondQuartal.push(totalPayments[i - 1])
      }
   }
   return secondQuartal
}

const secondQuartalPayments = getSecondQuartal(totalPayments)

function getSecondQuartalSum(secondQuartalPayments) {
   let secondQuartalSum = 0
   for (let i = 0; i < secondQuartalPayments.length; i++) {
      secondQuartalSum += secondQuartalPayments[i]
   }
   return secondQuartalSum
}

const sumOfSecondQuartal = getSecondQuartalSum(secondQuartalPayments)

// Знайти сумарну кількість грошей за: за парні місяці (з парними номерами);
function getEvenNumbers(totalPayments) {
   let evenNumbers = []
   for (let i = 0; i < totalPayments.length; i++) {
      if ((i + 1) % 2 == 0) {
         evenNumbers.push(totalPayments[i])
      }
   }
   return evenNumbers
}

const evenNumbersFromYear = getEvenNumbers(totalPayments)

function getEvenNumbersSum(evenNumbersFromYear) {
   let evenNumbersSum = 0
   for (let i = 0; i < evenNumbersFromYear.length; i++) {
      evenNumbersSum += evenNumbersFromYear[i]
   }
   return evenNumbersSum
}

const sumOfEvenNumbers = getEvenNumbersSum(evenNumbersFromYear)

// Знайти сумарну кількість грошей за: за місяці, які є початковими у сезоні (весна, літо, осінь, зима)
function getFirstMonthOfSeason(totalPayments) {
   let firstMonthOfSeason = []
   for (let i = 0; i < totalPayments.length; i++) {
      if ((i + 1) == 3 || (i + 1) == 6 || (i + 1) == 9 || (i + 1) == 12) {
         firstMonthOfSeason.push(totalPayments[i])
      }
   }
   return firstMonthOfSeason
}

const firstSeasonsMonth = getFirstMonthOfSeason(totalPayments)

function getSumOfFirstMonth(firstSeasonsMonth) {
   let sumOfFirstMonth = 0
   for (let i = 0; i < firstSeasonsMonth.length; i++) {
      sumOfFirstMonth += firstSeasonsMonth[i]
   }
   return sumOfFirstMonth
}

const firstMonthSum = getSumOfFirstMonth(firstSeasonsMonth)

document.write(`Платіжки протягом року - ${totalPayments}. <br>
Сумарна кількість грошей за рік - ${sumForYear}. <br>
Сумарна кількість грошей у першій половині року - ${sumOfFirstHalf}. <br>
Сумарна кількість грошей у другій половині року - ${sumOfSecondHalf}. <br>
Сумарна кількість грошей за літо - ${sumOfSummer}. <br>
Сумарна кількість грошей за ІІ квартал - ${sumOfSecondQuartal}. <br>
Сумарна кількість грошей за парні місяці - ${sumOfEvenNumbers}. <br>
Сумарна кількість грошей за місяці, які є початковими у сезоні - ${firstMonthSum}.`)