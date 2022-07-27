/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let stopwatch = document.getElementById('stopwatch') //mendapatkan value dari stopwatch
let startbtn = document.getElementById('start')//tombol untuk memulai stapwatch
let stopbtn = document.getElementById('stop') //tombol untuk memberhentikan stopwatch
let resetbtn = document.getElementById('reset') //tombol untuk mereset value dari stopwatch

// TODO: answer here

console.log(stopwatch)
console.log(startbtn)
startbtn.addEventListener('click', start)
stopbtn.addEventListener('click', stop)
resetbtn.addEventListener('click', reset)

let hour = "00"
let minute = "00"
let second = "00"

let stopwatchStart


function start() {
  // TODO: answer here
  stopwatchStart = setInterval(runTime, 1000)
}

function stop() {
  // TODO: answer here
  clearInterval(stopwatchStart)

}

function reset() {
  // TODO: answer here
  stopwatch.innerHTML ="00:00:00"
  stop()
  startbtn.removeAttribute("disabled")
}

function runTime() {
  // TODO: answer here
  let watch = stopwatch.innerHTML.split(":")
  let getHour = parseInt(watch[0])
  let getMinute = parseInt(watch[1])
  let getSecond = parseInt(watch[2])
  getSecond += 1
  // stopwatchStart = setInterval(getSecond, 1000)

  if(getSecond > 59){
    getSecond = 0
    getMinute++
  }
  second = getSecond < 10 ? "0" + getSecond : getSecond

  if(getMinute > 59){
    getSecond = 0
    getMinute = 0
    getHour++
  }
  minute = getMinute < 10 ? "0" + getMinute : getMinute
  hour   = getHour < 10 ? "0" + getHour : getHour
  stopwatch.innerHTML = hour + ":" + minute + ":" + second
  startbtn.setAttribute("disabled", true)
}