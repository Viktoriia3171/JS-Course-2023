//  Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.


const userRowsNumber = parseInt(prompt("Введіть кількість рядків поля."))
const userColumnsNumber = parseInt(prompt("Введіть кількість стовпців поля."))
const minBulletsNumber = 1
const maxBulletsNumber = userRowsNumber * userColumnsNumber
const userBullets = Math.floor(Math.random() * (maxBulletsNumber - minBulletsNumber) + minBulletsNumber)

const computerShipRow = Math.floor(Math.random() * userRowsNumber + 1)
const computerShipColumn = Math.floor(Math.random() * userColumnsNumber + 1)
document.write(`Корабель знаходився у рядку ${computerShipRow} та стовпці ${computerShipColumn}.`)
let userInformation = alert(`Поле розміром ${userRowsNumber} х ${userColumnsNumber}. У вас така кількість снарядів - ${userBullets}.`)

let userRowAttemp;
let userColumnAttemp;
let userAttemps = 1;


while (userAttemps <= userBullets) {
   userRowAttemp = parseInt(prompt("Введіть номер рядка, в якому на вашу думку знаходиться корабель."));
   userColumnAttemp = parseInt(prompt("Введіть номер стовпця, в якому на вашу думку знаходиться корабель."));
   userAttemps++
   if (userRowAttemp === computerShipRow && userColumnAttemp === computerShipColumn) {
      alert(`Ви потопили корабель!`)
      break;
   }
   else
      alert(`Ви не вгадали.`)
}




