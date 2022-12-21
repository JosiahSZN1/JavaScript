function addLike (user) {
    var element = document.querySelector(`#like${user}`);
    element.innerText++;
}