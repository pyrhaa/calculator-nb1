//select all the buttons
const buttons = document.querySelectorAll('button');

const evaluate = (value) => {
  const charArray = value.split('');
  let 

  console.log(charArray);

  charArray.forEach((char) => {
    // console.log(char);
    console.log(Number(char));
  });

  console.log(charArray);
};

const calculate = (event) => {
  // select the element with class display
  const display = document.querySelector('.display');
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    if (display.value !== '') {
      evaluate(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    display.value = '';
  } else {
    display.value += clickedButtonValue;
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', calculate);
});
