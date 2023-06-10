// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

function getRandomImage(imageNumber) {
   return Math.floor(Math.random() * imageNumber + 1)
}

function getFinalImage() {
   return `<img class="game" src="../img/Task7/image${getRandomImage(4)}.svg" alt=""">`
}

document.write(getFinalImage())