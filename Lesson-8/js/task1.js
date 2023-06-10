// Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

const subjectNumber = parseInt(prompt("Введіть кількість предметів:"))

function getScores(subjectNumber) {
   let itemsScore = [];
   for (let i = 0; i < subjectNumber; i++) {
      let randomScores = Math.floor(1 + Math.random() * 5)
      itemsScore.push(randomScores)
   }
   return itemsScore
}

const scores = getScores(subjectNumber)

function getAverageScore(scores) {
   let sum = 0;
   for (let i = 0; i < scores.length; i++) {
      sum += scores[i]
   }
   return sum / scores.length
}

function getStudentCategory(scores) {
   let minScore = Math.min(...scores)
   let result = ''
   switch (minScore) {
      case 1:
      case 2: result = 'Двійочник.'
         break;
      case 3: result = 'Трійочник.'
         break;
      case 4: result = 'Хорошист.'
         break;
      default: result = 'Відмінник.'
   }
   return result
}

document.write(`Оцінки студента - ${scores}. <br>
Середній бал - ${getAverageScore(scores).toFixed(1)}. <br>
Категорія студента - ${getStudentCategory(scores)}.`)