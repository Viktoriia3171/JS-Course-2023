// Задача 0

let a = parseFloat(prompt('Введіть значення a', '0'))
let b = parseFloat(prompt('Введіть значення b', '0'))
let c = parseFloat(prompt('Введіть значення c', '0'))
let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / -b)
document.write(`1) S1=${s1} <br> 2) S2=${s2} <br> 3) S3=${s3} <br> 4) S4=${s4}`)

