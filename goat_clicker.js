var gameContainerElement = document.getElementById('goat_game');

var gameHeadlineElement = document.createElement('h1');
gameHeadlineElement.innerText = 'Goat Clicker';

gameContainerElement.appendChild(gameHeadlineElement);

var gameButtonElement = document.createElement('button');
gameButtonElement.innerText = 'add a goat';
gameContainerElement.appendChild(gameButtonElement);

var gameClickCount = 0;
var updateView = function () {
    gameButtonElement.innerText = 'goat count: ' + gameClickCount;
};
var gameHandleClick = function () {
    gameClickCount += 1;
    updateView();
};
gameButtonElement.addEventListener(
    'click',
    gameHandleClick,
    false
);