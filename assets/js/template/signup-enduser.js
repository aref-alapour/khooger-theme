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

// Event callbacks reset code
const handleInputReset = ({target}) => {
  if (!target.value.length) { return target.value = null; }
  
  const inputLength = target.value.length;
  let currentIndex = Number(target.dataset.numberCodeResetInput);
  
  if (inputLength > 1) {
    const inputValues = target.value.split('');
    
    inputValues.forEach((value, valueIndex) => {
      const nextValueIndex = currentIndex + valueIndex;
      
      if (nextValueIndex >= numberCodeResetInputs.length) { return; }
      
      numberCodeResetInputs[nextValueIndex].value = value;
    });
    
    currentIndex += inputValues.length - 2;
  }
 
  const nextIndex = currentIndex + 1;
  
  if(nextIndex < numberCodeResetInputs.length) {
    numberCodeResetInputs[nextIndex].focus();
  }
}

const handleKeyDownReset = e => {
  const {code, target} = e;
  
  const currentIndex = Number(target.dataset.numberCodeResetInput);
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  
  const hasPreviousIndex = previousIndex >= 0;
  const hasNextIndex = nextIndex <= numberCodeResetInputs.length - 1
  
  switch(code) {
    case 'ArrowLeft':
    case 'ArrowUp':
      if (hasPreviousIndex) {
        numberCodeResetInputs[previousIndex].focus();
      }
      e.preventDefault();
      break;
      
    case 'ArrowRight':
    case 'ArrowDown':
      if (hasNextIndex) {
        numberCodeResetInputs[nextIndex].focus();
      }
      e.preventDefault();
      break;
    case 'Backspace':
      if (!e.target.value.length && hasPreviousIndex) {
        numberCodeResetInputs[previousIndex].value = null;
        numberCodeResetInputs[previousIndex].focus();
      }
      break;
    default:
      break;
  }
}
const accountType = document.querySelector('#account-type');

// Event listeners
numberCodeForm.addEventListener('input', handleInput);
numberCodeForm.addEventListener('keydown', handleKeyDown);
// dynamic forms
const formSignLevel1 = document.querySelector('#signup-phone');
const inputPhone = document.querySelector('input#phone');
const inputPhoneReset = document.querySelector('input#phone-reset');
const buttonPhoneSubmit = document.querySelector('input#submit-phone');
const buttonLoginCodeOneTime = document.querySelector('#login-code-one-time');
const formLevel1 = document.querySelector('#level-1');
const formLevel2 = document.querySelector('#level-2');
const formLevel3 = document.querySelector('#level-3');
const formLevel4 = document.querySelector('#level-4');
const codeTime = document.querySelector('#code-time');
const sendCode = document.querySelector('#sendCode');
const codeTimeBox = document.querySelector('#code-timer');
const preLevelIcon = document.querySelectorAll('.pre-level');
const signupPhoneCode = document.querySelector('#signup-phone-code');

formSignLevel1.addEventListener('submit', (e) => {
    e.preventDefault();
})
preLevelIcon.forEach(element => {
    element.addEventListener('click', function(){
      this.parentElement.style.display = 'none';
      this.parentElement.previousElementSibling.style.display = 'flex';
     })
});
function showResultPhoneReset(str) {
    if (str.length !== 11) {
       buttonPhoneReset.classList.add('disabled')
    }
    if (str.length == 11 && inputPhoneReset.checkValidity()) {
        buttonPhoneReset.classList.remove('disabled')
    }
}
function showResultPhone(str) {
    if (str.length !== 11) {
       buttonPhoneSubmit.classList.add('disabled')
    }
    if (str.length == 11 && inputPhone.checkValidity()) {
        buttonPhoneSubmit.classList.remove('disabled')
    }
}
accountType.addEventListener('submit', (e) => {
    e.preventDefault();
    formLevel1.style.display = 'none';
    formLevel2.style.display = 'flex';
})
buttonPhoneSubmit.addEventListener('click', () => {
    const counterTimeCode = codeTime.getAttribute('data-time');
    if (inputPhone.value) {
        formLevel2.style.display = 'none';
        formLevel3.style.display = 'flex';
        let i = counterTimeCode;
        counterCode = setInterval(function() {
	    if (i > 0) {
            i--
        }
        codeTime.textContent = i;
            if (i == 0) {
                clearInterval(counterCode);
                codeTimeBox.style.display = 'none';
                sendCode.style.display = 'block';
                
        }
        }, 1000);

    } 
})
sendCode.addEventListener('click', () => {
    const counterTimeCode = codeTime.getAttribute('data-time');
    codeTimeBox.style.display = 'block';
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
signupPhoneCode.addEventListener('submit', (e) => {
    e.preventDefault();
    formLevel3.style.display = 'none';
        formLevel4.style.display = 'flex';
})