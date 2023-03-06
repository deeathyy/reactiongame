const startButton = document.getElementById('start-button');
const reactionButton = document.getElementById('reaction-button');
const text = document.getElementById('text');
const result = document.getElementById('result');

let reactionTime;

startButton.addEventListener('click', () => {
	startButton.disabled = true;
	setTimeout(showText, getRandomTime(1000, 5000));
});

reactionButton.addEventListener('click', () => {
	reactionTime = new Date().getTime() - reactionTime;
	result.innerText = `Ваше время реакции: ${reactionTime} мс`;
	startButton.disabled = false;
	reactionButton.disabled = true;
	text.innerText = '';
});

function showText() {
	text.innerText = 'Нажми!';
	text.classList.add('black');
	reactionTime = new Date().getTime();
	reactionButton.disabled = false;
}

function getRandomTime(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
