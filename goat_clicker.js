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

var goatCost = 5;
var goatCount = 0;
var moneyPerGoatPerSecond = 1;
var goatHeadline = document.createElement('h2');
var goatDescription = document.createElement('p');
var goatDescription2 = document.createElement('p');
var goatCountDisplay = document.createElement('p');
money = goatCost; // So that you'll always have enough money to hire your first goat
goatHeadline.innerText = 'Goats';
gameContainer.appendChild(goatHeadline);
gameContainer.appendChild(goatDescription);
gameContainer.appendChild(goatDescription2);
gameContainer.appendChild(goatCountDisplay);

var updateGoatView = function () {
    var hireNextGoatMessage = 'Click the hire a goat button below to start generating money.';
    if (goatCount > 1) {
        hireNextGoatMessage = 'Click the button again to hire more goats and generate more money.';
    }
    goatDescription.innerText = (
        'Goats are great! Your goats automatically generate money for you.'
        + ' Each goat gives you '
        + moneyPerGoatPerSecond
        + ' money per second.'
        + 'Your goats are now giving you '
        + (goatCount * moneyPerGoatPerSecond)
        + ' money per second'
    );
    goatDescription2.innerText = (
        'Hiring a goat will cost '
        + goatCost
        + ' money. '
        + hireNextGoatMessage
    );
    goatCountDisplay.innerText = 'goat count: ' + goatCount;
};
updateGoatView();
var addGoatButton = document.createElement('button');
addGoatButton.innerText = 'hire a goat';
gameContainer.appendChild(addGoatButton);
var addGoat = function () {
    if (money >= goatCost) {
        goatCount += 1;
        money -= goatCost;
        goatCost += 1;
        updateGoatView();
    } else {
        alert(
            'you do not have enough money to hire a goat! ...yet.'
            + ' you need '
            + (goatCost - money)
            + ' more money to hire a goat'
        );
    }
};
addGoatButton.addEventListener(
    'click',
    addGoat,
    false
);


