const nxtbutton = document.querySelector('.nxt-button');
const video = document.querySelector('.hero-video')
const movielist = ['assets/videos/hero-1.mp4', 'assets/videos/hero-2.mp4', 'assets/videos/hero-3.mp4', 'assets/videos/hero-4.mp4']
let index = 0;
nxtbutton.addEventListener('click', function() {
    index += 1;
    video.src = movielist[index];
    if (index===3){
        index = -1
    }
});

let button = document.querySelector('.menu-toggle');
let menu = document.querySelector('.head-right');

button.onclick = function () {
    menu.classList.toggle('active');
};

let oBtn = document.querySelector('.contact-btn');
let popup = document.querySelector('.contact-us-popup');
let cBtn = document.querySelector('.cross-icon');

oBtn.onclick = function () {
    popup.style.display = 'flex';
};

cBtn.onclick = function () {
    popup.style.display = 'none';
};