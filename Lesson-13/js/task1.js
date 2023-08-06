//  Нехай x0 = 1, xi = (xi - 1) + 2i, де i = 1,2, ... . Визначити x10. Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів

function getResultRecurse(i) {
   if (i === 0) {
      return 1
   }
   else
      return getResultRecurse(i - 1) + 2 * i
}

function getResultNotRecurse(i) {
   let x = 1
   for (let index = 0; index <= i; index++) {
      x += 2 * index
   }
   return x
}

const userNumber = 10
const resultRecurse = getResultRecurse(userNumber)
const resultNotRecurse = getResultNotRecurse(userNumber)

console.log(`Результат з використанням рекурсивних алгоритмів: ${resultRecurse}. 
Результат без використанням рекурсивних алгоритмів: ${resultNotRecurse}.`)