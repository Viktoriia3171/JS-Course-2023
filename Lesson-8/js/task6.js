// Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).


const userMoney = parseFloat(prompt("Введіть кількість ваших грошей у євро:"))

let productTitles = ['cheese', 'juice', 'bread', 'milk', 'meal']
let productPrices = [3.25, 2.3, 0.59, 1.59, 7]

for (let i = 0; i < productPrices.length; i++) {
   if (userMoney >= productPrices[i]) {
      document.write(`Ви можете купити ${productTitles[i]}. <br>`)
   }
}