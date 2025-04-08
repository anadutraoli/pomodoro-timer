let tempoText = document.getElementById("tempo-temporizador");
let pauseBtn = document.getElementById("pause-btn");
let interval;
let timeLeft = 3000;

function pomodoroTimer() {
  let pomodoroT = document.querySelectorAll(".pomodoro-timer");
  pomodoroT.forEach((t) => {
    t.addEventListener("click", () => {
      switch (t.textContent.trim()) {
        case "Pomodoro":
          clearInterval(interval)
          timeLeft = 3000;
          startTimer();          
          break;
        case "Descanso":
          clearInterval(interval)
          timeLeft = 300;
          startTimer()
          break;
        case "Longo Descanso":
          clearInterval(interval)
          timeLeft = 900;
          startTimer()
          break;
      }
    });
  });
}

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  let formattedTimer = `${formattedMinutes}:${formattedSeconds}`;
  tempoText.innerHTML = formattedTimer
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer()
    pauseBtn.innerText = "PAUSE";
    if (timeLeft <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}





