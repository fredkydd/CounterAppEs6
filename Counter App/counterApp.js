'use strict';

const count = document.querySelector('.count');
const subtract = document.querySelector('.subtract');
const reset = document.querySelector('.reset');
const addition = document.querySelector('.addition');
const buttons = document.querySelector('.buttons');

// Function for colors
function numColor() {
    if (count.innerHTML < 0) {
        count.style.color = '#ff6347';
    } else if (count.innerHTML == 0) {
        count.style.color = '#fff';
    } else if (count.innerHTML > 0) {
        count.style.color = '#3cb371';
    }
}

// Arrow Function for buttons
buttons.addEventListener('click', (eye) => {
    if (eye.target.classList.contains('subtract')) {
        count.innerHTML--;
        console.log(`Subtract button is clicked`);
        numColor();
    } else if (eye.target.classList.contains('reset')) {
        count.innerHTML = 0;
        console.log(`Reset button is clicked`);
        numColor();
    } else if (eye.target.classList.contains('addition')) {
        count.innerHTML++;
        console.log(`Addition button is clicked`);
        numColor();
    }
});



/*
subtract.addEventListener('click', () => {
    count.innerHTML--;
});

addition.addEventListener('click', () => {
    count.innerHTML++;
});

reset.addEventListener('click', () => {
    count.innerHTML = 0;
});
*/

// Checking Buttons work or not

/*
buttons.addEventListener('click', (x) => {
    if (x.target.classList.contains('addition')) {
        console.log(`Add button was clicked`);
    } else if (x.target.classList.contains('subtract')) {
        console.log(`Subtract button was clicked`);
    } else if (x.target.classList.contains('reset')) {
        console.log(`Reset button was clicked`);
    }
}); 
*/