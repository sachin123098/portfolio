const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const msg = document.querySelector(".message");
const form = document.querySelector(".user-form");


form.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        alert("please enter all fields in contact form");
        setTimeout(() => msg.remove(),5000);
    }
    else{
        alert("message sent");
    }
}