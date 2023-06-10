// Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

const userElementsNumber = parseInt(prompt("Введіть кількість автомобілів:"))

let automobiles = new Array(userElementsNumber)

function getAutomobilesNumbers(automobiles) {
   let automobilesNumber
   for (let i = 0; i < automobiles.length; i++) {
      automobilesNumber = prompt(`Введіть номер ${i + 1}-ого автомобіля:`)
      automobiles[i] = automobilesNumber
   }
   return automobiles
}

const autoNumbers = getAutomobilesNumbers(automobiles)

let newAutos = []
for (let i = 0; i < autoNumbers.length; i++) {
   if (autoNumbers[i][0] === "A") {
      newAutos.push(autoNumbers[i])
   }
}

console.log(newAutos)