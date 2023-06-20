// BUTTONS
const frying = document.querySelector('#frying');
const material = document.querySelector('#material');
const first = document.querySelector('.first');
const second = document.querySelector('.second');

frying.addEventListener('click', phase);
material.addEventListener('click', blacket);

function phase() {
    first.style.display = 'block';
    second.style.display = 'none';
    frying.classList.add('times');
    material.classList.remove('keystone1');
}
function blacket() {
    first.style.display = 'none';
    second.style.display = 'block';
    frying.classList.remove('times');
    material.classList.add('keystone1');
}


// MATERIAL LOSS
function computeLoan() {
    let amount = parseFloat(document.getElementById('amounts').value);
    let months = document.getElementById('monthss').value;
    let payment = (((amount - months) / amount) * 100).toFixed(0);
    let paymentsss = (100 - (((amount - months) / amount) * 100)).toFixed(0);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    paymentsss = paymentsss.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payments').innerHTML = `${payment}%`;
    document.getElementById('paymentsss').innerHTML = `${paymentsss}%`;
}


// FRYING TIME
function withdrawLoan() {
    let amount = parseFloat(document.getElementById('amount').value);
    let interest_rate = 4.2;
    let months = document.getElementById('months').value;
    let payment = (amount * (months / interest_rate ) / 60).toFixed(1);
    let paymentss = (amount * (months / interest_rate )).toFixed(1);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    paymentss = paymentss.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = `${payment} hr`;
    document.getElementById('paymentss').innerHTML = `${paymentss} m`;
}



// TYPEWRITTER EFFECT
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
    // Current Index Of Word
    const current = this.wordIndex % this.words.length;
    // Get Full Text OF Current word
    const fullTxt = this.words[current];

    // Check If Deleting
    if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1)

    } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<div class = "txt">${this.txt}</div>`

    // Type Speed 
    let typeSpeed = 100;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;

        // Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;

        // Move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500 
    }

    setTimeout(() => this.type(), typeSpeed)
}

// Init On dom Load
document.addEventListener('DOMContentLoaded', init)


// Init App
function init() {
    const txtElement = document.querySelector('.movement');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    
    // Init Typewriter
    new TypeWriter(txtElement, words, wait);
}

