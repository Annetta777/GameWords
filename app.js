let words = ['макака', 'шип', 'кошка', 'изысканный', 'кокошник', 'яблоко', 'парад', 'конкурс', 'гравитация', 'алхимия']

let word = words[Math.floor(Math.random() * words.length)]

let answerArray = []
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_'
}

let remainingLetters = word.length
let step = 10

while (remainingLetters > 0 && step <= 10) {
    alert(answerArray.join(' '))
    let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.')
    let guessSmall = guess.toLowerCase()

if (guessSmall === null) {
    break
} else if (guessSmall.length !== 1) {
  alert('Пожалуйста, введите только одну букву.')
} else {
    for ( let j = 0; j < word.length; j++) {
    if (word[j] === guessSmall && answerArray[j] !== guessSmall) {
        answerArray[j] = guessSmall
        remainingLetters--
      }
    }
  }
}

alert(answerArray.join(' '))
alert('Отлично! Было загадано слово ' + word)