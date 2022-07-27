/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/
// Masih error di pengambilan score dan mengubah score
let newGameBtn = document.getElementsByClassName('new-game')[0]
let randomNumber = Math.floor(Math.random() * 10) + 1
let message = document.getElementsByClassName('message')[0]
let displayScore = document.getElementsByClassName('score-label')[0]
let input = document.getElementsByClassName('input')[0]
let checkBtn = document.getElementsByClassName('check')[0]
let score = document.getElementsByClassName('score')[0]

// TODO: answer here
// let scoreInner = score.innerHTML = 1
console.log(score.innerHTML)
console.log(message)
newGameBtn.addEventListener('click', resetGame)
checkBtn.addEventListener('click', checkNumber)

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg
  if(!input.value){
    message.innerHTML = "Please enter a number"
  } else if(input.value > 10 || input.value < 1){
    message.innerHTML = "Guess any number between 1 and 10"
  } else if(input.value < randomNumber) {
    message.innerHTML = "Too small, buddy!"
    score.innerHTML = parseInt(score.innerHTML) - 1
  } else if(input.value > randomNumber) {
    message.innerHTML = "Oww... that's too big!"
    score.innerHTML = parseInt(score.innerHTML) - 1
  } else if(input.value == randomNumber) {
    message.innerHTML = "You got it!"
  } 
}

function resetGame() {
  // TODO: answer here
  randomNumber
  score.innerHTML = 10
  message.innerHTML = "Lets start guessing..."
  input.value = ""
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
  // console.log(input.value)
  // console.log(randomNumber)
  // console.log(score)
  displayMessage(input.value)
  if(score.innerHTML <= 0){
    message.innerHTML = "You lose!"
    score.innerHTML = 0
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber