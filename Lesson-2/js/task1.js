//Задача 1

let num1 = parseFloat(prompt('Введіть значення першого числа'))
let num2 = parseFloat(prompt('Введіть значення другого числа'))
let s1 = num1 + num2
let s2 = num1 * num2
let s3 = num1 / num2

document.write(`<table> 
<tr>
<td>Сума двох чисел</td>
<td>${s1}</td>
</tr>
<tr>
<td>Добуток двох чисел</td>
<td>${s2}</td>
</tr>
<tr>
<td>Частка двох чисел</td>
<td>${s3}</td>
</tr>
</table>`)
