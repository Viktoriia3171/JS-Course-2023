let driverCategory = prompt("Введіть категорію свого водійського посвідчення латинськими літерами")
if (driverCategory === 'A' || driverCategory === 'a')
   document.write(`Ви маєте право керувати мотоциклом.`)
else if (driverCategory === 'B' || driverCategory === 'b')
   document.write(`Ви маєте право керувати легковим автомобілем.`)
else if (driverCategory === 'C' || driverCategory === 'c')
   document.write(`Ви маєте право керувати вантажним автомобілем.`)
else
   document.write(`Категорія вашого водійського посвідчення введена некоректно.`)