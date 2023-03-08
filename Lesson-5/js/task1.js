const userNumber = parseInt(prompt('Введіть кількість випадкових чисел'))
let i = 1
while (i <= userNumber) {
   let randomNumber = Math.floor(Math.random() * 100 + 1)
   document.write(`<ul><li>${randomNumber}</li></ul>`)
   i++
}
