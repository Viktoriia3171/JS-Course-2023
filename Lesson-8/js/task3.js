// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

const studentsNumber = parseInt(prompt("Введіть кількість учнів:"))

function getStudentsNames(studentsNumber) {
   let studentNames = []
   let studentValue
   for (let i = 0; i < studentsNumber; i++) {
      studentValue = prompt(`Введіть ім'я ${i + 1}-ого учня:`)
      studentNames.push(studentValue)
   }
   return studentNames
}

const names = getStudentsNames(studentsNumber)

function getNameIvan(names) {
   let nameIvan = 0
   for (let i = 0; i < names.length; i++) {
      if (names[i] === 'Іван') {
         nameIvan++
      }
   }
   return nameIvan
}

document.write(`Ім'я Іван у класі - ${getNameIvan(names)}.`)