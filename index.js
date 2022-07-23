const inputEmail = document.getElementById('email');
const svgEmail = document.getElementById("svg-email");
const inputPassword = document.getElementById('password');
const svgPassword = document.getElementById("svg-password");
const btn = document.getElementById('btn');



inputEmail.addEventListener('focus', function changeBorder() {
    inputEmail.style.borderColor = "rgb(130, 87, 230)";
    svgEmail.style.fill = "rgb(130, 87, 230)"
    svgEmail.style.opacity = "1"
})

inputEmail.addEventListener('focusout', function bordaNormal() {
    inputEmail.style.borderColor = "rgb(18,18,20)";
    svgEmail.style.fill = "grey"
    svgEmail.style.opacity = "20%"
});

inputPassword.addEventListener('focus', function changeBorder() {
    inputPassword.style.borderColor = "rgb(130, 87, 230)";
    svgPassword.style.fill = "rgb(130, 87, 230)"
    svgPassword.style.opacity = "1"
})

inputPassword.addEventListener('focusout', function bordaNormal() {
    inputPassword.style.borderColor = "rgb(18,18,20)";
    svgPassword.style.fill = "grey"
    svgPassword.style.opacity = "20%"
});




const inputs = document.querySelectorAll('input')


const btnDisabledStyle = () => {
    btn.classList.add('btn-disabled')
}

const btnEnableStyle = () => {
    btn.classList.remove('btn-disabled')
}

btnDisabledStyle()


inputs.forEach((input) => {
    input.addEventListener('keyup', ()  => {
        if (inputEmail.value !== ""  && inputPassword.value !== "") {
            btnEnableStyle()
        } else {
            btnDisabledStyle()
        }
    })
}) 


