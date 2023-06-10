// Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

const userSantimetr = parseFloat(prompt('Введіть сантиметри:'))
const inch = 0.394
function getInch() {
   let calculation = userSantimetr * inch
   return calculation.toFixed(2)
}
document.write(`${userSantimetr} см становить ${getInch()} дюйми. <br>`)

const userKilogram = parseFloat(prompt('Введіть кілограми:'))
const pound = 2.2046
function getPound() {
   let calculation = userKilogram * pound
   return calculation.toFixed(2)
}
document.write(`${userKilogram} кг становить ${getPound()} фунтів. <br>`)

const userKilometr = parseFloat(prompt('Введіть кілометри:'))
const mile = 0.6214
function getMile() {
   let calculation = userKilometr * mile
   return calculation.toFixed(2)
}
document.write(`${userKilometr} км становить ${getMile()} миль.`)
