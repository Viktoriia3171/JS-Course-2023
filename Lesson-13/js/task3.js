// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.

function getIterator(minValue, maxValue) {
   let currentValue = minValue
   function iterator() {
      if (currentValue > maxValue) {
         currentValue = minValue
      }
      return currentValue++
   }

   return iterator
}

let monthNumber = getIterator(1, 12)

const maxMonthNumber = 12

for (let i = 0; i <= maxMonthNumber; i++) {
   console.log(monthNumber())
}
