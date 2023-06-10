// Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів (поки він не відмовиться). Знаходити сумарний виграш.

const arrayLength = 10

function getRandomNumbers() {
   let winningElements = []
   for (let i = 0; i < arrayLength; i++) {
      const randomNumbers = Math.floor((Math.random() * 1001) - 500)
      winningElements.push(randomNumbers)
   }
   return winningElements
}

const winningAmount = getRandomNumbers()

function getUserElementsNumbers(winningAmount) {
   let userElement = false
   let userElementsNumbers = []
   for (let i = 0; i < winningAmount.length; i++) {
      userElement = confirm(`Ви хочете вибрати елемент №${i + 1}?`)
      if (userElement === true) {
         userElementsNumbers.push(winningAmount[i])
      }
   }
   return userElementsNumbers
}

const userNumbers = getUserElementsNumbers(winningAmount)

function getWinningSum(userNumbers) {
   let winningSum = 0
   for (let i = 0; i < userNumbers.length; i++) {
      winningSum += userNumbers[i]
   }
   return winningSum
}

const userPrize = getWinningSum(userNumbers)

document.write(`Масив з виграшними елементами - ${winningAmount}. <br>
Елементи, які вибрав користувач - ${userNumbers}. <br>
Виграшна сума - ${userPrize}.`)