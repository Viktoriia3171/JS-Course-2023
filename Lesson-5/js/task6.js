let counter = 1
for (let tableNumber = 1; tableNumber <= 3; tableNumber++) {
   document.write(`<table>`)
   for (let stringNumber = 1; stringNumber <= 3; stringNumber++) {
      document.write(`<tr>`)
      for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
         document.write(`<td>${counter}</td>`)
         counter++
      }
      document.write(`</tr>`)
   }
   document.write(`</table>`)
}