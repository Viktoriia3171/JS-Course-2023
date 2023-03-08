const userNumber = parseInt(prompt('Введіть кількість абзаців:'))
for (let title = 1; title <= userNumber; title++) {
   document.write(`<h1>Заголовок ${title}`)
   let chapter = title
   for (let chapterNumbers = 1; chapterNumbers <= title; chapterNumbers++) {
      let paragraphNumbers = chapterNumbers
      document.write(`<p>Розділ ${chapter}, параграф ${paragraphNumbers}`)
      document.write(`</p>`)
   }
   document.write(`</h1> <hr>`)
}