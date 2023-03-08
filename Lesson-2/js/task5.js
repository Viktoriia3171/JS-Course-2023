// Задача 5

let seconds = parseInt(prompt('Вкажіть кількість секунд, що пройшла від початку доби'))
let minutes = seconds / 60
let hours = minutes / 60
document.write(`${seconds}с становить ${minutes}хв та ${hours}год.`)