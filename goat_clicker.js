var gameContainer = document.getElementById('goat_game');

var gameHeadline = document.createElement('h1');
gameHeadline.innerText = 'Goat Clicker';
gameContainer.appendChild(gameHeadline);

var moneyDisplay = document.createElement('h2');
gameContainer.appendChild(moneyDisplay)
var moneyDescription = document.createElement('p');
gameContainer.appendChild(moneyDescription)
var money = 0;
var updateMoneyView = function () {
    var moneyMadeThisSecond = (
        0
        + (goatCount * moneyPerGoatPerSecond)
    );
    money += moneyMadeThisSecond;
    moneyDisplay.innerText = (
        'money: '
        + money
    );
    moneyDescription.innerText = (
        'Your goats generate '
        + moneyMadeThisSecond
        + ' money per second'
    );
}
setInterval(
    updateMoneyView,
    1000
);

var goatHeadline = document.createElement('h2');
goatHeadline.innerText = 'Goats';
gameContainer.appendChild(goatHeadline);
var goatDescription = document.createElement('p');
goatDescription.innerText = (
    'Goats are great! Your goats automatically generate money for you.'
    + ' Each goat gives you '
    + moneyPerGoatPerSecond
    + ' money per second.'
);
var moneyPerGoatPerSecond = 0.1;


gameContainer.appendChild(goatDescription);
var goatCountDisplay = document.createElement('p');
gameContainer.appendChild(goatCountDisplay);
var goatCount = 0;
var updateGoatView = function () {
    goatDescription.innerText = (
        'Goats are great! Your goats automatically generate money for you.'
        + ' Each goat gives you '
        + moneyPerGoatPerSecond
        + ' money per second.'
        + 'Your goats are now giving you '
        + (goatCount * moneyPerGoatPerSecond)
        + ' money per second'
    );
    goatCountDisplay.innerText = 'goat count: ' + goatCount;
};
var addGoatButton = document.createElement('button');
addGoatButton.innerText = 'add a goat';
gameContainer.appendChild(addGoatButton);
var addGoat = function () {
    goatCount += 1;
    updateGoatView();
};
addGoatButton.addEventListener(
    'click',
    addGoat,
    false
);


