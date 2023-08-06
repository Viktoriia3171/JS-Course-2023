// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.

const word = "april"
const description = "Другий місяць весни."

function getIterator(word) {
   let i = 0
   function iterator() {
      if (i >= word.length) {
         i = 0
      }
      return word[i++]
   }
   return iterator
}

function getTranslationGame(word, description) {
   const guessWordByLetters = getIterator(word)
   let counter = 0
   alert(`${description}`)
   for (let i = 0; i < word.length; i++) {
      const letter = guessWordByLetters()
      const userLetter = prompt(`Введіть ${i + 1} літеру:`)
      if (userLetter.toLowerCase() == letter) {
         alert("Правильно!")
         counter++
      }
      else {
         alert("Невірно!")
      }
   }
   return counter
}

const translationGame = getTranslationGame(word, description)
console.log(`Загадане слово - ${word}.`)
console.log(`Кількість вгаданих букв: ${translationGame}.`)