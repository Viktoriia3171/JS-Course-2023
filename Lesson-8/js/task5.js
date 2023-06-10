// Дано послідовність оцінок учня. Підрахувати кількість:
// двійок;
// кількість хороших оцінок (добре, відмінно);
// кількість оцінок, які нижче середнього.

const scoreNumbers = parseInt(prompt("Введіть кількість оцінок:"))

function getScores(scoreNumbers) {
   let scores = []
   let randomScores
   for (let i = 0; i < scoreNumbers; i++) {
      randomScores = Math.floor(1 + Math.random() * 5)
      scores.push(randomScores)
   }
   return scores
}

const studentScores = getScores(scoreNumbers)

let scoreTwoCounter = 0
let excellentScoreCounter = 0
for (let i = 0; i < studentScores.length; i++) {
   if (studentScores[i] === 2) {
      scoreTwoCounter++
   }
   else if (studentScores[i] >= 4) {
      excellentScoreCounter++
   }
}

let lessThanMiddleScoreCounter = 0
for (let i = 0; i < studentScores.length; i++) {
   if (studentScores[i] < 3) {
      lessThanMiddleScoreCounter++
   }
}

document.write(`Оцінки учня - ${studentScores}. <br> Кількість двійок - ${scoreTwoCounter}. <br> Кількість хороших оцінок - ${excellentScoreCounter}. <br> Кількість оцінок, нижче середнього - ${lessThanMiddleScoreCounter}.`)