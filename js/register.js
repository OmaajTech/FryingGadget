const indicator = document.querySelector('.indicator');
const input = document.querySelector('#password1');
const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');
const showbtn1 = document.querySelector('#showbtn1');
const input2 = document.querySelector('#password2');
const showbtn2 = document.querySelector('#showbtn2');
const checked = document.querySelector('.checked');
const btn = document.querySelector('.btn');

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,(,),-,_,=,+,?,>,<]/;

input.addEventListener('keyup', conn);
input2.addEventListener('keyup', crush);

function conn() {
    if(input.value) {
        text.style.display = 'block';
        if(input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))no=1;
        if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
        if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))no=3;
        if(no == 1) {
            text2.style.display = 'block';
            text2.textContent = 'weak'
            text2.classList.add('weak');
        }
        if(no == 2) {
            text2.textContent = 'medium'
            text2.classList.add('medium');
        }else {
            text2.classList.remove('medium');
        }
        if(no == 3) {
            text2.textContent = 'strong'
            text2.classList.add('strong');
        }else {
            text2.classList.remove('strong');
        }
        showbtn1.style.display = 'block';
        showbtn1.onclick = function() {
            if(input.type === 'password') {
                input.type = 'text';
                showbtn1.textContent = 'HIDE'
            }else {
                input.type = 'password';
                showbtn1.textContent = 'SHOW'
            }
        }
    }else {
        text.style.display = 'none';
        text2.style.display = 'none';
        showbtn1.style.display = 'none';
    }
    
    if(input.value.length >= 6) {
        input2.removeAttribute('disabled', '');
        input2.classList.add('control');
    }else {
        input2.setAttribute('disabled', '');
        input2.classList.remove('control');
    }

    if(input.value !== input2.value) {
        btn.setAttribute('disabled', '');
        btn.classList.remove('active');
        checked.style.display = 'block';
        // checked.textContent = 'Password Do Not Match';
        return false;
    }else {
        btn.removeAttribute('disabled', '');
        checked.style.display = 'none';
        btn.classList.add('active');
        return false;
    }
}


function crush() {

    if(input2.value !== '') {
        showbtn2.style.display = 'block';
        showbtn2.onclick = function() {
            if(input2.type === 'password') {
                input2.type = 'text';
                showbtn2.textContent = 'HIDE'
            }else {
                input2.type = 'password';
                showbtn2.textContent = 'SHOW'
            }
        }
    }else {
        showbtn2.style.display = 'none';
    }

    if(input.value !== input2.value) {
        btn.setAttribute('disabled', '');
        btn.classList.remove('active');
        checked.style.display = 'block';
        checked.textContent = 'Password Do Not Match';
        return false;
    }else {
        btn.removeAttribute('disabled', '');
        checked.style.display = 'none';
        btn.classList.add('active');
        return false;
    }
}

