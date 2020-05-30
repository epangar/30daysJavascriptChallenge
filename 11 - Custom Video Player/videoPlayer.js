
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');

const ranges = player.querySelectorAll('.player__slider');

const togglePlay = () => video.paused ? video.play() : video.pause();

const updateButton = () => {
    const icon = video.paused ? "▶" : "❚❚";
    toggle.textContent = icon;
}



video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button =>button.addEventListener('click', ()=>{ 
    video.currentTime += parseInt(button.dataset.skip)  
}));



