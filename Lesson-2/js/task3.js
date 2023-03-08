// Задача 3


let price = parseFloat(prompt('Введіть вартість одиниці товару'))
let numb = parseFloat(prompt('Введіть кількість товару'))
let currentPrice = price * numb
let PDV = currentPrice * 5 / 100
document.write(`Загальна вартість товару становить ${currentPrice} <br> ПДВ становить ${PDV}`)