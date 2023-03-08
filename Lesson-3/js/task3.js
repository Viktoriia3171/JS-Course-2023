const randomNumber = Math.floor(Math.random() * 5) + 1
let userNumber = parseInt(prompt('Загадано число від 1 до 5. Спробуйте вгадати число за дві спроби'))
let result

if (userNumber === randomNumber)
   result = `Вітаємо! Ви вгадали число з першого разу. Це число - ${randomNumber}.`
else {
   userNumber = parseInt(prompt('На жаль, ви не вгадали число з першого разу. У вас є ще одна спроба.'))
   if (userNumber === randomNumber)
      result = `Вітаємо! Ви вгадали число з другого разу. Це число - ${randomNumber}.`
   else
      result = `На жаль, вам не вдалося вгадати число з двох спроб.`
}

document.write(result)



