const titleTimer = document.getElementById("timerNum");
let time = 1500;
let stopBtn = false;

function startTime() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60
    let timer = `${minutes.toFixed(0)}:${seconds.toString().padStart(2,"0")}`    
    titleTimer.textContent = timer
}

document.getElementById("StartBtn").addEventListener("click", function(){
    stopBtn = false;
    let countdown = setInterval(() => {           
        if(time === 0 && stopBtn === false) {
            let audipFah = document.getElementById("fahh");
            audipFah.loop = true;
            audipFah.play();            
        } else if(time > 0 && stopBtn === false) {
            time--;         
            startTime();             
        };
    },1000);
});

document.getElementById("StopBtn").addEventListener("click", function(){
    if(time <= 0 && stopBtn === false) {
        let audipFah = document.getElementById("fahh");
        audipFah.loop = false;
        audipFah.pause();    
        stopBtn = true;              
    } else {
        stopBtn = true;
    };
});

document.getElementById("RestartBtn").addEventListener("click", function() {
    time = 1500;
});