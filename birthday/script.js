const CORRECT_PASSWORD = '123456';

let currentPassword = "";
const maxLength = 6;

const passwordDots = document.getElementById('passwordDots');
const numberButtons = document.querySelectorAll('[data-number]');
const confirmBtn = document.getElementById('confirmBtn');
const clearBtn = document.getElementById('clearBtn');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const dots = passwordDots.querySelectorAll('.dot');

function updatePasswordDisplay(){
    dots.forEach((dot, index) => {
        if ( index < currentPassword.length ) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
};

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentPassword.length < maxLength) {
            currentPassword += button.textContent;
            updatePasswordDisplay();
        }
    });
});

clearBtn.addEventListener('click', () => {
    currentPassword = '';
    updatePasswordDisplay();
});


confirmBtn.addEventListener('click', function(e){
    if(currentPassword === CORRECT_PASSWORD) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        // Chuyển hướng sang index.html sau khi nhập đúng mật khẩu
        setTimeout(() => {
            window.location.href = 'wish.html';
        }, 500); // Đợi 0.5s để hiển thị thông báo thành công
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        currentPassword = '';
        updatePasswordDisplay();

        setTimeout(()=> {
            errorMessage.style.display = 'none';
        }, 2000);
    }
});