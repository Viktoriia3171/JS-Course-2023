// Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

const userElementsNumber = parseInt(prompt("Введіть кількість елементів:"))

let arr = new Array(userElementsNumber).fill(1)
arr.fill(7, 5)

console.log(arr)
