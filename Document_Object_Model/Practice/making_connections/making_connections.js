function accept (user) {
    document.querySelector(`.${user}`).remove();
    document.querySelector('.number').innerText--;
    document.querySelector('.connections .number').innerText++;
}

function remove (user) {
    document.querySelector(`.${user}`).remove();
    document.querySelector('.number').innerText--;
}

function changeName() {
   document.querySelector('.main-content h1').innerText = '... Ma nem is Jeff';

}