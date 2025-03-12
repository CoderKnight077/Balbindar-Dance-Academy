document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("danceVideo");
    const soundToggle = document.getElementById("soundToggle");
    const soundIcon = document.getElementById("soundIcon");

    // Ensure video plays without being blocked
    video.muted = true;
    video.play().catch(error => console.log("Autoplay blocked:", error));

    // Toggle Sound On/Off
    soundToggle.addEventListener("click", function () {
        video.muted = !video.muted;
        soundIcon.classList.toggle("fa-volume-up", !video.muted);
        soundIcon.classList.toggle("fa-volume-mute", video.muted);
    });
});
