let words = [
  "макака",
  "шип",
  "кошка",
  "изысканный",
  "кокошник",
  "яблоко",
  "парад",
  "конкурс",
  "гравитация",
  "алхимия",
]

let Pickword = function () {
  return words[Math.floor(Math.random() * words.length)]
}

function setupAnswerArray(word) {
  let array = []
  for (let i = 0; i < word.length; i++) {
    array[i] = "_"
  }
  return array
}

function showPlayerProgress(answerArray) {
  alert(answerArray.join(" "))
}

let getGuess = function () {
  const simbol = prompt(
    "Угадайте букву или нажмите Отмена для выхода из игры."
  )
  return simbol
};

function updateGameState(guess, word, answerArray) {
  let score = 0
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] !== guess) {
      answerArray[j] = guess
      score++
    }
  }
  return score
}

function showAnswerAndCongratulatePlayer(answerArray) {
  alert(answerArray.join(" "))
  alert("Отлично! Было загадано слово " + word)
}

let word = Pickword()
let answerArray = setupAnswerArray(word)
let remainingLetters = word.length
let step = 0

while (remainingLetters > 0 && step <= 20) {
  showPlayerProgress(answerArray)
  let guess = getGuess()
  if (guess === null) {
    break
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите только одну букву.")
  } else {
    let correctGuesses = updateGameState(guess, word, answerArray)
    remainingLetters -= correctGuesses;
  }
  step++
}

showAnswerAndCongratulatePlayer(answerArray)
