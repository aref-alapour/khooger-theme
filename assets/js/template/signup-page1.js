// Elements
const numberCodeForm = document.querySelector('[data-number-code-form]');
const numberCodeInputs = [...numberCodeForm.querySelectorAll('[data-number-code-input]')];

// Event callbacks
const handleInput = ({target}) => {
  if (!target.value.length) { return target.value = null; }
  
  const inputLength = target.value.length;
  let currentIndex = Number(target.dataset.numberCodeInput);
  
  if (inputLength > 1) {
    const inputValues = target.value.split('');
    
    inputValues.forEach((value, valueIndex) => {
      const nextValueIndex = currentIndex + valueIndex;
      
      if (nextValueIndex >= numberCodeInputs.length) { return; }
      
      numberCodeInputs[nextValueIndex].value = value;
    });
    
    currentIndex += inputValues.length - 2;
  }
 
  const nextIndex = currentIndex + 1;
  
  if(nextIndex < numberCodeInputs.length) {
    numberCodeInputs[nextIndex].focus();
  }
}

const handleKeyDown = e => {
  const {code, target} = e;
  
  const currentIndex = Number(target.dataset.numberCodeInput);
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  
  const hasPreviousIndex = previousIndex >= 0;
  const hasNextIndex = nextIndex <= numberCodeInputs.length - 1
  
  switch(code) {
    case 'ArrowLeft':
    case 'ArrowUp':
      if (hasPreviousIndex) {
        numberCodeInputs[previousIndex].focus();
      }
      e.preventDefault();
      break;
      
    case 'ArrowRight':
    case 'ArrowDown':
      if (hasNextIndex) {
        numberCodeInputs[nextIndex].focus();
      }
      e.preventDefault();
      break;
    case 'Backspace':
      if (!e.target.value.length && hasPreviousIndex) {
        numberCodeInputs[previousIndex].value = null;
        numberCodeInputs[previousIndex].focus();
      }
      break;
    default:
      break;
  }
}

// Event listeners
numberCodeForm.addEventListener('input', handleInput);
numberCodeForm.addEventListener('keydown', handleKeyDown);

// dynamic forms
const formSignLevel1 = document.querySelector('#signup-phone');
const inputPhone = document.querySelector('input#phone');
const buttonPhoneSubmit = document.querySelector('input#submit-phone');
const formLevel1 = document.querySelector('#level-1');
const formLevel2 = document.querySelector('#level-2');
const codeTime = document.querySelector('#code-time');
const codeTimeP = document.querySelector('.code-timer');
const sendCode = document.querySelector('#sendCode');

formSignLevel1.addEventListener('submit', (e) => {
    e.preventDefault();
})

function showResultPhone(str) {
    if (str.length == 0) {
       buttonPhoneSubmit.classList.add('disabled')
    }
    if (str.length > 0) {
        buttonPhoneSubmit.classList.remove('disabled')
    }
}
buttonPhoneSubmit.addEventListener('click', () => {
    const counterTimeCode = codeTime.getAttribute('data-time');
    if (inputPhone.value) {
        formLevel1.style.display = 'none';
        formLevel2.style.display = 'flex';
        let i = counterTimeCode;
        counterCode = setInterval(function() {
	    if (i > 0) {
            i--
        }
        codeTime.textContent = i;
            if (i == 0) {
                clearInterval(counterCode);
                codeTimeP.style.display = 'none';
                sendCode.style.display = 'block';
                
        }
        }, 1000);

    } 
})
sendCode.addEventListener('click', () => {
    const counterTimeCode = codeTime.getAttribute('data-time');
    codeTimeP.style.display = 'block';
    sendCode.style.display = 'none';
    codeTime.textContent = counterTimeCode;
    let i = counterTimeCode;
        counterCode = setInterval(function() {
	    if (i > 0) {
            i--
        }
        codeTime.textContent = i;
            if (i == 0) {
                clearInterval(counterCode);
                codeTimeP.style.display = 'none';
                sendCode.style.display = 'block';
                
        }
        }, 1000);
})
