// Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

const userElementsNumber = parseInt(prompt("Введіть кількість елементів в масиві:"))

let arr = new Array(userElementsNumber).fill(0)

document.write(`${arr}`)