var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

let numbButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let totalButton = document.querySelector('[data-total]');
let operationClear = document.querySelectorAll('[data-clear]');
let previous = document.getElementById('previous');
let current = document.getElementById('current');

let firstNumber = '';
let secondNumber = '';
let selectedOperation = '';
let result = '';

numbButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    if (current.textContent === 'Error') {
      current.textContent = '';
      previous.textContent = '';
      firstNumber = '';
      secondNumber = '';
      selectedOperation = '';
    }
    const number = btn.getAttribute('data-number');
    current.textContent += number;
    if (selectedOperation) {
      secondNumber += number;
    } else {
      firstNumber += number;
    }
  });
});

operationButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    if (current.textContent === 'Error') {
      current.textContent = '';
      previous.textContent = '';
      firstNumber = '';
      secondNumber = '';
      selectedOperation = '';
    }
    const operation = btn.getAttribute('data-operation');
    current.textContent += operation;
    selectedOperation = operation;
  });
});

totalButton.addEventListener('click', function() {
  if (current.textContent === 'Error') {
    current.textContent = '';
    previous.textContent = '';
    firstNumber = '';
    secondNumber = '';
    selectedOperation = '';
  }

  if (firstNumber && secondNumber && selectedOperation) {
    if (selectedOperation === '+') {
      result = Number(firstNumber) + Number(secondNumber);
      previous.textContent = firstNumber + " + " + secondNumber;
      console.log(result);
    } else if (selectedOperation === '-') {
      result = Number(firstNumber) - Number(secondNumber);
      previous.textContent = firstNumber + " - " + secondNumber;
    } else if (selectedOperation === 'x') {
      result = Number(firstNumber) * Number(secondNumber);
      previous.textContent = firstNumber + " x " + secondNumber;
    } else if (selectedOperation === '/') {
      result = Number(firstNumber) / Number(secondNumber);
      previous.textContent = firstNumber + " ÷ " + secondNumber;
    }

    if (isNaN(result) || !isFinite(result)) {
      current.textContent = 'Error';
    } else {
      current.textContent = result;
    }
  }

  firstNumber = '';
  secondNumber = '';
  selectedOperation = '';
});

operationClear.forEach(btn => {
  btn.addEventListener('click', function() {
    current.textContent = '';
    previous.textContent = '';
    firstNumber = '';
    secondNumber = '';
    selectedOperation = '';
  });
});
