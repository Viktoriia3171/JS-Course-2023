// Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).


let lemon = (`<img class="game" src="../img/Task12/lemon.svg" alt="">`)
let banana = (`<img class="game" src="../img/Task12/banana.svg" alt="">`)
let cherry = (`<img class="game" src="../img/Task12/cherry.svg" alt="">`)
let apple = (`<img class="game" src="../img/Task12/apple.svg" alt="">`)

let fruit = ''
let result = ''

for (let counter = 0; counter < 3; counter++) {
   let randomPosition = Math.floor(Math.random() * 4 + 1)
   switch (randomPosition) {
      case 1: fruit += lemon, result += 1;
         break;
      case 2: fruit += banana, result += 2;
         break;
      case 3: fruit += cherry, result += 3;
         break;
      case 4: fruit += apple, result += 4;
         break;
   }
}

switch (result) {
   case "111": userPrize = `Вітаємо! Ви виграли 100 гривень.`;
      break;
   case "222": userPrize = `Вітаємо! Ви виграли 200 гривень.`;
      break;
   case "333": userPrize = `Вітаємо! Ви виграли 500 гривень.`;
      break;
   case "444": userPrize = `Вітаємо! Ви виграли 1000 гривень.`;
      break;
   default:
      userPrize = `На жаль, ви нічого не виграли.`;
      break;
}

document.write(`${fruit} <br> ${userPrize}`)