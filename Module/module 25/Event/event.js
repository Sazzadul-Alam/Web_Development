function makeRed() {
    document.body.style.backgroundColor = 'red';
}
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = "pink";
}

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
