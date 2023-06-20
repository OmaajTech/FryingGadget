const input3 = document.querySelector('#password3');
const showbtn3 = document.querySelector('#showbtn3');

input3.addEventListener('keyup', create);

function create() {

    if(input3.value !== '') {
        showbtn3.style.display = 'block';
        showbtn3.onclick = function() {
            if(input3.type === 'password') {
                input3.type = 'text';
                showbtn3.textContent = 'HIDE'
            }else {
                input3.type = 'password';
                showbtn3.textContent = 'SHOW'
            }
        }
    }else {
        showbtn3.style.display = 'none';
    }
}