// let merchbtn = document.querySelector('.merchbtn');
// let gamebtn = document.querySelector('.gamebtn');
// let merch = document.querySelector('.merch')
// let game = document.querySelector('.game');
// merchBtn.onclick = function () {
//     merch.style.display = "block";
// };

// gameBtn.onclick = function () {
//     game.style.display = "block";
// };

let button = document.querySelector('.menu-toggle');
let menu = document.querySelector('.head-right');

button.onclick = function () {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
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
const nxtbutton = document.querySelector('.nxt-button');
const video = document.querySelector('.slide');
const movielist = [
    'assets/img/hoodie.jpg',
    'assets/img/mug.jpg',
    'assets/img/skin.jpg',
    'assets/img/poster.jpg',
];
let index = 0;
nxtbutton.addEventListener('click', function () {
    index += 1;
    video.src = movielist[index];
    if (index === 3) {
        index = -1;
    }
});
