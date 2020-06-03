
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider');

const togglePlay = () => video.paused ? video.play() : video.pause();

const updateButton = () => {
    const icon = video.paused ? "▶" : "❚❚";
    toggle.textContent = icon;
}

const handleProgress = () => {
    
    const percent = (video.currentTime / video.duration ) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    
}



const scrub = (e) =>{
    const scrubTime = (e.offsetX / progress.offsetWidth ) * video.duration;
    video.currentTime = scrubTime;
}   



video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', ()=>{ 
    video.currentTime += parseInt(button.dataset.skip)  
}));


ranges.forEach(range => range.addEventListener('change', () => {
    const property = range.name 
    video[property] = range.value
}))


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


