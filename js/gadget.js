const progressCircular = document.querySelector('.progress-circular');
const btn = document.querySelector('button');
const inp = document.querySelector('input');
const val = document.querySelector('.value');
const slogan = document.querySelector('#slogan');
const leave = document.querySelector('.leave');
// const graphichs = document.querySelector('.graphichs');

let start = 0; 

btn.addEventListener('click', bar);
inp.addEventListener('keyup', bladd);
slogan.addEventListener('click', bladders);


function bar() {
    let progress = setInterval(() => {
        if(start < inp.value && start < 900 ) {
            start++;
            progressEnd()
        }else {
            start--;
            progressEnd()
        }

        function progressEnd() {
            progressCircular.style.background = `conic-gradient( #ff4757 ${start * 3.6 / 9 }deg, #ededed 0deg)`
            val.textContent = `${start}j`
            if(start == inp.value) {
                clearInterval(progress)
                // inp.value = '';
            }
        }
        

    },20 );
}


function bladd() {
    console.log('working');
    setInterval(() => {
        if(inp.value >= 900) {
            slogan.removeAttribute('disabled', '');
            slogan.classList.add('appear')
            inp.value = '';
        }
    },10000 * 3)
    if(inp.value >= 900) {
         
    }
    else {
        slogan.setAttribute('disabled', '');
        slogan.classList.remove('appear')
    }
    
}

function bladders() {
    leave.style.display = 'none';
    // graphichs.style.display = 'block';
}


