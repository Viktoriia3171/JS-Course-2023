let weekDay = parseInt(prompt('Введіть номер дня тижня'))
const minWeekDay = 1
const maxWeekDay = 7
if (weekDay < minWeekDay || weekDay > maxWeekDay)
   document.write(`Номер дня тижня введено некоректно.`)
if (weekDay === 1)
   document.write(`Перший день тижня - понеділок.`)
else if (weekDay === 2)
   document.write(`Другий день тижня - вівторок.`)
else if (weekDay === 3)
   document.write(`Третій день тижня - середа.`)
else if (weekDay === 4)
   document.write(`Четвертий день тижня - четвер.`)
else if (weekDay === 5)
   document.write(`П'ятий день тижня - п'ятниця.`)
else if (weekDay === 6)
   document.write(`Шостий день тижня - субота.`)
else if (weekDay === 7)
   document.write(`Сьомий день тижня - неділя.`)