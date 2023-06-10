// Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

const userElementsNumber = parseInt(prompt("Введіть кількість елементів:"))

let arr = new Array(userElementsNumber).fill(1)

let middleOfArr = arr.length / 2
if (middleOfArr % 2 != 0) {
   middleOfArr += 1
}

arr.fill(7, middleOfArr)

console.log(arr)