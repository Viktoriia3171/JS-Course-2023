// Створити функцію, яка виводить банер. У функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення. Тег img повинен знаходитись у середині тега a: <a> <img src=”шлях”> </a>

const userTitle = `<p class="apple" >Apple.com</p>`
const userLink = `<a href="https://www.apple.com/"><img class="game" src="../img/Task8/image1.svg" alt="""></a>`

function getBanner(title, link) {
   document.write(title)
   document.write(link)
}
getBanner(userTitle, userLink)
