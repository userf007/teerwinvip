let remainingSeconds = 60;
let progressBar = document.getElementById('progress-bar');

function updateCountdown() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    document.getElementById("countdown").innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Update progress bar
    const progress = (60 - remainingSeconds) * (100 / 60);
    progressBar.style.width = `${progress}%`;

    remainingSeconds -= 1;

    if (remainingSeconds < 0) {
        // Display pop-up when time runs out
        Swal.fire({
            title: 'Time is up!',
            text: 'The free joining period has ended. Stay tuned for more opportunities!',
            icon: 'info',
            confirmButtonText: 'Okay'
        });
        remainingSeconds = 60; // Reset to 1 minute
    }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
