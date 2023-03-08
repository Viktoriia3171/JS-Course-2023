// Задача 2

let birth = parseInt(prompt('Вкажіть ваш рік народження'))
let year = (new Date()).getFullYear()
let age = year - birth
document.write(`Ваш вік - ${age}`)
