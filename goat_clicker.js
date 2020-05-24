var gameContainer = document.getElementById('goat_game');

var gameHeadline = document.createElement('h1');
gameHeadline.innerText = 'Goat Clicker';
gameContainer.appendChild(gameHeadline);

var moneyDisplay = document.createElement('h2');
gameContainer.appendChild(moneyDisplay)
var moneyDescription = document.createElement('p');
gameContainer.appendChild(moneyDescription)
var money = 10;
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
var moneyPerGoatPerSecond = 1;
goatDescription.innerText = (
    'Goats are great! Your goats automatically generate money for you.'
    + ' Each goat gives you '
    + moneyPerGoatPerSecond
    + ' money per second.'
);

var goatDescription2 = document.createElement('p')
goatDescription2.innerText = (
    'Each goat will cost 10 money.  Click the hire a goat button below to start generating money.'
);

gameContainer.appendChild(goatDescription);
gameContainer.appendChild(goatDescription2)
var goatCountDisplay = document.createElement('p');
gameContainer.appendChild(goatCountDisplay);
var goatCount = 0;
var goatCost = 10;
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
addGoatButton.innerText = 'hire a goat';
gameContainer.appendChild(addGoatButton);
var addGoat = function () {
    if (money >= goatCost) {
        goatCount += 1;
        money -= goatCost;
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


