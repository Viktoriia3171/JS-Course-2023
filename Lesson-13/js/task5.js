// Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.

function getExample() {
   let firstRandomNumber = Math.floor(Math.random() * 20 + 1)
   let secondRandomNumber = Math.floor(Math.random() * 20 + 1)
   let example = parseInt(prompt(`${firstRandomNumber}` + "+" + `${secondRandomNumber}`))
   if (example === firstRandomNumber + secondRandomNumber) alert("Правильно!")
   else alert("Невірно!")
}
let intervalId = setInterval(getExample, 10000)
