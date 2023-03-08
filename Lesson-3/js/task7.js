let monthNumber = parseInt(prompt("Введіть номер місяця"))
const minMonthNumber = 1
const maxMonthNumber = 12
if (monthNumber < minMonthNumber || monthNumber > maxMonthNumber)
   document.write(`Такого номера місяця не існує.`)
else if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12)
   document.write(`Цей місяць відноситься до зимової пори року.`)
else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5)
   document.write(`Цей місяць відноситься до весняної пори року.`)
else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8)
   document.write(`Цей місяць відноситься до літньої пори року.`)
else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11)
   document.write(`Цей місяць відноситься до осінньої пори року.`)