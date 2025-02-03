function startCountdown(duration, display) {
    let endTime = Date.now() + duration;

    let countdownInterval = setInterval(() => {
        let remainingTime = endTime - Date.now();

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            display.textContent = "หมดเวลาการดำเนินการ";
        } else {
            let minutes = Math.floor(remainingTime / (1000 * 60));
            let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

window.onload = function() {
    let countdownDisplay = document.getElementById('countdown');
    startCountdown(30 * 60 * 1000, countdownDisplay);
}