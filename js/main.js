// // SIDE-BAR
// const wrapper = document.querySelector('#wrapper');

// wrapper.addEventListener('click', good);

// function good() {
//     wrapper.classList.toggle('active');
//     console.log('click')
// }

// MENU-BAR
const menu = document.querySelector('.menu-icon');

menu.addEventListener('click', goodder);

function goodder() {
    document.querySelector('body').classList.toggle('active');
}


// NOTIFICATION && PROFILE
const bell = document.querySelector('#bell');
const takeover = document.querySelector('#takeover');
const shunt = document.querySelector('#shunt');
const bell_1 = document.querySelector('.bell-1');

bell.addEventListener('click', bellea);
takeover.addEventListener('click', tajers);

function bellea() {
    bell.classList.toggle('show');
    takeover.classList.remove('shows');
}

function tajers() {
    takeover.classList.toggle('shows');
    bell.classList.remove('show');
    console.log('wprkimg');
    // bell_1.style.display = 'none';
}