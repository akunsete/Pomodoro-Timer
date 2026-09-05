const titleTimer = document.getElementById("timerNum");
const startBtn = document.getElementById("StartBtn");
let time = 1500;
let stopBtn = false;
let startButton = false;

function startTime() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60
    let timer = `${minutes.toFixed(0)}:${seconds.toString().padStart(2,"0")}`    
    titleTimer.textContent = timer
}

startBtn.addEventListener("click", function(){
    
    startBtn.disabled = true    
    stopBtn = false;
    startButton = true;
    let countdown = setInterval(() => {           
        if(time === 0 && stopBtn === false && startButton == true) {                                    
            startBtn.disabled = true;
            let audipFah = document.getElementById("fahh");
            audipFah.loop = true;
            audipFah.play();            
        } else if(time > 0 && stopBtn === false && startButton == true) {
            time--;
            startTime();             
        } else {
            setInterval(countdown, 1000);
            clearInterval(countdown);
        }
    },1000);
});

document.getElementById("StopBtn").addEventListener("click", function(){
    stopBtn = true;
    if(stopBtn === true && startButton == true) {
        startButton = false;
        startBtn.disabled = false;
        let audipFah = document.getElementById("fahh");
        audipFah.loop = false;
        audipFah.pause();    
        stopBtn = true;                    
    } else if(stopBtn === true && startButton == false) {
        startButton = false;
        startBtn.disabled = false;
        let audipFah = document.getElementById("fahh");
        audipFah.loop = false;
        audipFah.pause();    
        stopBtn = true;         
    }
    else {
        stopBtn = false;        
    };
});

document.getElementById("RestartBtn").addEventListener("click", function() {
    time = 1500;
    titleTimer.textContent = "25:00";
});