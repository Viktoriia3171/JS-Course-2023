// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

// Дано масив з номерами автомобілів
const carNumbers = parseInt(prompt("Введіть кількість автомобілів:"))

function getNames(carNumbers) {
   let cars = []
   let carName
   for (let i = 0; i < carNumbers; i++) {
      carName = prompt(`Введіть номер ${i + 1}-ого автомобіля:`)
      cars.push(carName)
   }
   return cars
}

const autos = getNames(carNumbers)

// •	починаються на букву «А»;
let firstLetterCounter = 0

for (let i = 0; i < autos.length; i++) {
   let firstLetter = autos[i][0];
   if (firstLetter === 'A') {
      firstLetterCounter++
   }
}

// •	перша і остання літери співпадають;
let lettersCounter = 0
for (let i = 0; i < autos.length; i++) {
   let firstLetter = autos[i][0];
   let lastLetter = autos[i][autos[i].length - 1]
   if (firstLetter === lastLetter) {
      lettersCounter++
   }
}

// •	складаються з більше ніш 5 символів;
let symbolCounter = 0
for (let i = 0; i < autos.length; i++) {
   if (autos[i].length > 5) {
      symbolCounter++
   }
}


document.write(`Номери автомобілів - ${autos}. <br> Кількість номерів, які починаються на букву "А" - ${firstLetterCounter}. <br> Кількість номерів, в яких перша і остання буква співпадають - ${lettersCounter}. <br> Кількість номерів, які складаються з більше ніш 5 символів - ${symbolCounter}.`)