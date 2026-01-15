let merchbtn = document.querySelector('.merchbtn');
let gamebtn = document.querySelector('.gamebtn');
let merch = document.querySelector('.merch')
let game = document.querySelector('.game');
merchBtn.onclick = function () {
    merch.style.display = "block";
};

gameBtn.onclick = function () {
    game.style.display = "block";
};

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