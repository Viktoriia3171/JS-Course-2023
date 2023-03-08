// Задача 6

let price1 = parseFloat(prompt('Вкажіть вартість товару №1'))
let num1 = parseFloat(prompt('Вкажіть кількість товару №1'))
let price2 = parseFloat(prompt('Вкажіть вартість товару №2'))
let num2 = parseFloat(prompt('Вкажіть кількість товару №2'))
let price3 = parseFloat(prompt('Вкажіть вартість товару №3'))
let num3 = parseFloat(prompt('Вкажіть кількість товару №3'))

let sum1 = price1 * num1
let sum2 = price2 * num2
let sum3 = price3 * num3
let currentPrice = sum1 + sum2 + sum3

let date = new Date().toLocaleDateString()
let time = new Date().toLocaleTimeString()

document.write(`<table>
${date} ${time}
<tr>
<td>Назва товару</td>
<td>Кількість</td>
<td>Ціна</td>
<td>Разом</td>
</tr>
<tr>
<td>Товар №1</td>
<td>${num1}</td>
<td>${price1}</td>
<td>${sum1}</td>
</tr>
<tr>
<td>Товар №2</td>
<td>${num2}</td>
<td>${price2}</td>
<td>${sum2}</td>
</tr>
<tr>
<td>Товар №3</td>
<td>${num3}</td>
<td>${price3}</td>
<td>${sum3}</td>
</tr>
<tr>
<td>До оплати:</td>
<td></td>
<td></td>
<td>${currentPrice}</td>
</tr>
</table>`)

