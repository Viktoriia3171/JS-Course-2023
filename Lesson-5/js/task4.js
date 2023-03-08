document.write(`<table>`)
mainLoop: for (let stringNumber = 1; stringNumber <= 3; stringNumber++) {
   document.write(`<tr></tr>`)
   if (stringNumber <= 3)
      for (let columnNumber = 1; columnNumber <= 7; columnNumber++) {
         document.write(`<td>${columnNumber}</td>`)
      }
   else
      continue mainLoop
}
document.write(`</table>`)
