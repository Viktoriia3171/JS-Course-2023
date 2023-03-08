let price = prompt('Введіть ціну товару')
let userMoney = parseFloat(prompt('Введіть вашу кількість грошей у гривнях'))
let remainderUserMoney = userMoney - price
const lottery = 4

if (userMoney < price)
   document.write(`Покупка неможлива. Недостатня кількість грошей`)
else if (remainderUserMoney >= lottery)
   document.write(`Покупку здійснено успішно. У вас залишилось ${remainderUserMoney} грн. Ви ще можете купити лотерею всього за ${lottery} грн!`)
else
   document.write(`Покупку здійснено успішно.`)

