let millisecondsElapsed = 0;
let interval =null;
const time = document.getElementById("time")

function pad(value){
    return String(value).padStart(2,"0")
}
function setTimer(){
    const totalSeconds = Math.floor(millisecondsElapsed / 1000);
    const minutes = Math.floor(totalSeconds/60);
    const seconds =totalSeconds % 60;
    const milliseconds = Math.floor((millisecondsElapsed % 1000) / 10); 
    time.innerHTML = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;}

function timer(){
    millisecondsElapsed+=10;
    setTimer()
}
function startClock(){
    if (interval) stopClock()
    interval = setInterval(timer,10)
}
function stopClock(){
    clearInterval(interval)
     interval = null;

}
function resetClock(){
    stopClock()
    millisecondsElapsed= 0;
    setTimer()

}

setTimer();