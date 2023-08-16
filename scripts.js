const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const circle = document.querySelector('.circle');
const container = document.querySelector('.container');

const openMenu = () => {
    circle.style.transform = 'rotate(-89deg)';
}

const closeMenu = () => {
    circle.style.transform = 'rotate(1deg)';
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);