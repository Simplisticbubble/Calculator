let shouldResetScreen = false;
let first = '';
let second = '';


const numberButtons = document.querySelectorAll('[data-number]');
const displayScreen = document.getElementById('display')
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');

addButton.addEventListener('click', () => add())
equalsButton.addEventListener('click', () => equals())
numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);
function appendNumber(number) {
    if (displayScreen.textContent === '0' || shouldResetScreen)
    resetScreen()
  displayScreen.textContent += number
  }
function resetScreen() {
    displayScreen.textContent = '';
    shouldResetScreen = false
  }
function add() {
    first = displayScreen.textContent;
    resetScreen();

};
function equals(){
    let ans = parseInt(first) + parseInt(displayScreen.textContent);
    resetScreen();
    displayScreen.textContent += ans;
}

function subtract(x,y) {
	return x - y;
};


function multiply(x,y) {
  return x*y;
};
const divide = function(x,y){
    return x/y;
};

