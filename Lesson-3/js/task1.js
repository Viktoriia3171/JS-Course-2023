let nameFirstChild = prompt('Введіть ім`я першої дитини')
let numCandiesFirstChild = parseInt(prompt('Введіть кількість цукерок у першої дитини'))
let nameSecondChild = prompt('Введіть ім`я другої дитини')
let numCandiesSecondChild = parseInt(prompt('Введіть кількість цукерок у другої дитини'))

if (numCandiesFirstChild > numCandiesSecondChild)
   document.write(`${nameFirstChild} має більше цукерок`)
else if (numCandiesFirstChild == numCandiesSecondChild)
   document.write(`У дітей порівну цукерок`)
else
   document.write(`${nameSecondChild} має більше цукерок`)
