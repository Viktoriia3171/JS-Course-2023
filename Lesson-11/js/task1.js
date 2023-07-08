// Знайти суми елементів у вказаній області

// Створення рандомного числа
const minValue = parseInt(prompt("Введіть мінімальне значення числа в масиві"))
const maxValue = parseInt(prompt("Введіть максимальне значення числа в масиві"))

function getRandomNumber(minValue, maxValue) {
   return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}


// Створення рандомного одновимірного масиву

const arrayLength = Math.floor(Math.random() * 5 + 1)

function getRandomArray(arrayLength) {
   const randomArray = []
   for (let i = 0; i < arrayLength; i++) {

      const randomNumber = getRandomNumber(minValue, maxValue)
      randomArray.push(randomNumber)
   }
   return randomArray
}

// Створення рандомного двовимірного масиву

function getRandomTable(rowsNumber, columnsNumber, minValue, maxValue) {
   const randomTable = []
   for (let i = 0; i < rowsNumber; i++) {
      const randomRow = getRandomArray(columnsNumber, minValue, maxValue)
      randomTable.push(randomRow)
   }
   return randomTable
}

const twoDimensionalArray = getRandomTable(4, 4, minValue, maxValue)

// Виводимо початкову таблицю та результати

function tableOutput(table) {
   document.write(`
             <table border="1" width="200px" style="text-align: center">
                 <tbody>
         `)
   for (let i = 0; i < table.length; i++) {
      document.write(`<tr>`)
      for (let j = 0; j < table[i].length; j++)
         document.write(`<td>${table[i][j]}</td>`)
      document.write(`</tr>`)
   }
   document.write(`
                 </tbody>
             </table> <br>
         `)
}

const table = tableOutput(twoDimensionalArray)

// Знайти суму елементів у вказаній області

function getSum(twoDimensionalArray, a, b, c, d, n) {
   let sum = 0
   for (let rowIndex = a; rowIndex < b; rowIndex++) {
      for (let columnIndex = c; columnIndex < d; columnIndex++) {
         sum += twoDimensionalArray[rowIndex][columnIndex]
      }
   }
   return `Сума ${n} = ${sum}. <br>`

}

const firstSum = document.write(getSum(twoDimensionalArray, 0, 2, 0, 2, "вказаних елементів у першій області"))
const secondSum = document.write(getSum(twoDimensionalArray, 0, 2, 2, 4, "вказаних елементів у другій області"))
const thirdSum = document.write(getSum(twoDimensionalArray, 2, 4, 0, 2, "вказаних елементів у третій області"))
const fourthSum = document.write(getSum(twoDimensionalArray, 2, 4, 2, 4, "вказаних елементів у четвертій області"))

function getSumOfEvenRows(twoDimensionalArray, a, b) {
   let sum = 0
   for (let i = 0; i < twoDimensionalArray.length; i++) {
      sum += twoDimensionalArray[a][i] + twoDimensionalArray[b][i]
   }
   return sum
}

const sumOfEvenRows = document.write("Сума парних рядків = " + getSumOfEvenRows(twoDimensionalArray, 0, 2) + ". <br>")

function getSumOfOddColumns(twoDimensionalArray, c, d, e) {
   let sum = 0
   for (let i = 0; i < e; i++) {
      sum += twoDimensionalArray[i][c] + twoDimensionalArray[i][d]
   }
   return sum
}

const sumOfOddColumns = document.write("Сума непарних стовпців = " + getSumOfOddColumns(twoDimensionalArray, 1, 3, 4) + ". <br>")

// У парних рядках – непарні стовпці, у непарних – парні.

function getEvenRows(length) {
   let evenRow = []
   for (let i = 0; i < length; i++) {
      if (i % 2 == 0) {
         evenRow.push(i)
      }
   }
   return evenRow
}

const evenRows = getEvenRows(4)

function getOddColumns(twoDimensionalArray) {
   let oddColumns = []
   for (let i = 0; i < twoDimensionalArray.length; i++) {
      if (i % 2 !== 0) {
         oddColumns.push(i)
      }
   }
   return oddColumns
}

const oddColumns = getOddColumns(twoDimensionalArray)

function getFirstMixedSum(twoDimensionalArray, evenRows, oddColumns) {
   let sum = 0
   for (let i = 0; i < evenRows.length; i++) {
      for (let j = 0; j < oddColumns.length; j++) {
         sum += twoDimensionalArray[evenRows[i]][oddColumns[j]]
      }
   }
   return sum
}

const firstMixedSum = document.write("Сума у парних рядках непарних стовпців = " + getFirstMixedSum(twoDimensionalArray, evenRows, oddColumns) + ". <br>")

function getOddRows(length) {
   let oddRows = []
   for (let i = 0; i < length; i++) {
      if (i % 2 !== 0) {
         oddRows.push(i)
      }
   }
   return oddRows
}

const oddRows = getOddRows(4)

function getEvenColumns(twoDimensionalArray) {
   let oddColumns = []
   for (let i = 0; i < twoDimensionalArray.length; i++) {
      if (i % 2 === 0) {
         oddColumns.push(i)
      }
   }
   return oddColumns
}

const evenColumns = getEvenColumns(twoDimensionalArray)

function getSecondMixedSum(twoDimensionalArray, evenColumns, oddRows) {
   let sum = 0
   for (let i = 0; i < evenRows.length; i++) {
      for (let j = 0; j < oddColumns.length; j++) {
         sum += twoDimensionalArray[oddRows[i]][evenColumns[j]]
      }
   }
   return sum
}

const secondMixedSum = document.write("Сума у непарних рядках парних стовпців = " + getSecondMixedSum(twoDimensionalArray, evenColumns, oddRows) + ". <br>")