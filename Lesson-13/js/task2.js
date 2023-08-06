// Нехай x0 = x1 = 1, xi = x(i-1) + 2x(i-2), де i = 2,3,... Визначити xn. Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів.

const userNumber = parseInt(prompt("Введіть число і:", 5))

function getRecurseResult(i) {
   if (i === 0 || i === 1) return 1
   else return getRecurseResult(i - 1) + 2 * getRecurseResult(i - 2)
}

function getNotRecurseResult(i) {
   if (i === 0 || i === 1) return 1
   else {
      let x0 = x1 = 1
      let variable
      for (let j = 2; j <= i; j++) {
         variable = x1 + 2 * x0
         x0 = x1
         x1 = variable
      }
      return variable
   }
}

const resultRecurse = getRecurseResult(userNumber)
const resultNotRecurse = getNotRecurseResult(userNumber)
console.log(`Результат з використанням рекурсивних алгоритмів: ${resultRecurse}. 
Результат без використанням рекурсивних алгоритмів: ${resultNotRecurse}.`)
