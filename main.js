let shouldResetScreen = false;
let first = '';
let second = '';
let op = '';


const numberButtons = document.querySelectorAll('[data-number]');
const displayScreen = document.getElementById('display')
const addButton = document.getElementById('add');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const decButton = document.getElementById('dec');

decButton.addEventListener('click', () => dec())
addButton.addEventListener('click', () => add())
minusButton.addEventListener('click', () => subtract())
multiplyButton.addEventListener('click', () => multiply())
divideButton.addEventListener('click', () => divide())
equalsButton.addEventListener('click', () => equals())
clearButton.addEventListener('click', () => clear())
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
function dec(){
  displayScreen.textContent += '.';
}
function add() {
  if(op == ''){
    first = displayScreen.textContent;
  }else{
    first = cal(displayScreen.textContent);
  }
    
    resetScreen();
    op = '+'

};
function equals(){
    let ans = cal(displayScreen.textContent);
    resetScreen();
    displayScreen.textContent += ans;
    op = '';
}

function subtract() {
	if(op == ''){
    first = displayScreen.textContent;
  }else{
    first = cal(displayScreen.textContent);
  }
    resetScreen();
    op = '-'
};


function multiply() {
  if(op == ''){
    first = displayScreen.textContent;
  }else{
    first = cal(displayScreen.textContent);
  }
    resetScreen();
    op = '*'
};
function divide(){
  if(op == ''){
    first = displayScreen.textContent;
  }else{
    first = cal(displayScreen.textContent);
  }
  resetScreen();
  op = '/'
};
function cal(num){
  if(op === '+'){
    return parseFloat(first)+ parseFloat(num);
  }
  else if(op === '-'){
    return parseFloat(first) - parseFloat(num);
  }
  else if(op === '/'){
    return parseFloat(first)/parseFloat(num);
  }
  else if(op === '*'){
    return parseFloat(first)*parseFloat(num);
  }
  
};

function clear(){
  first = '';
  op = '';
  resetScreen();
  displayScreen.textContent += '0';
}