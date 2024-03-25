const loginBtnDesktop = document.querySelector('#login-btn-desktop');
const loginBtnMobile = document.querySelector('#login-btn-mobile');
const loginRegister = document.querySelector('#loginRegister');
const mainSignupContainer = document.querySelector('#main-signup-container');
const closeLoginRegister = document.querySelector('#close-loginRegister');
const backgroundOverlay = document.querySelector('#background-overlay');
const accountType = document.querySelector('#account-type');
const loginPassword = document.querySelector('#login-password');
const resetPassword = document.querySelector('#reset-password');
const searchIcon = document.querySelector('#search-icon');
const searchContainer = document.querySelector('#search-container');
const closeSearchContainer = document.querySelector('#close-search-container');
const searchResultInput = document.querySelector('#search-result');
const mobileIcon = document.querySelector('#mobile-icon');
const menuContainer = document.querySelector('.nav-drill');
const closeMenuContainerLevel = document.querySelector('#close-menu-container-level-1');
const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
const backLink = `<li class="nav-item flex justify-content-space-between align-items-center">
	<a class="nav-link nav-back-link" href="javascript:;">
		برگشت به منوی قبل
	</a>
     <div class="close-menu-container">
                        <i class="fa fa-times"></i>
                    </div>
</li>`;

// megaMenu
const mainList = document.querySelectorAll('.main-services-list'),
  dropdownItemSubList = document.querySelectorAll('.dropdown-item-services-sub-list'),
  dropdownItemShopSub = document.querySelectorAll('.dropdown-item-shop-sub'),
  dropdownItemSub = document.querySelectorAll('.dropdown-item-services-sub'),
  dropdownItemSubInfo = document.querySelectorAll('.dropdown-item-services-sub-info'),
  mainShopList = document.querySelectorAll('.main-shop-list'),
  dropdownItemSubShopList = document.querySelectorAll('.dropdown-item-sub-shop-list'),
  dropdownItemShopSubInfo = document.querySelectorAll('.dropdown-item-shop-sub-info');

mainListActive = function ($listItem) {
  $listItem.forEach(element => {
    element.classList.remove('dropdown-item');
  });
}
dropdownItem = function ($listItem) {
  $listItem.forEach(element => {
    element.classList.remove('dropdown-item-sub-active');
  })
}
subList = function ($listItem) {
  $listItem.forEach(element => {
    element.classList.remove('dropdown-item-sub-detail');
  })
}
subContentList = function ($listItem) {
  $listItem.forEach(element => {
    element.classList.remove('dropdown-item-sub-info-active');
  })
}
mainList.forEach(element => {
  element.addEventListener("mouseenter", function () {
    mainListActive(mainList);
    element.classList.add('dropdown-item');
    var mainData = element.getAttribute("data-menu");
    dropdownItemSub.forEach(element => {
      var subData = element.getAttribute("data-menu");
      if (subData == mainData) {
        dropdownItem(dropdownItemSub);
        element.classList.add('dropdown-item-sub-active');
      }
      dropdownItemSubList.forEach(element => {
        element.addEventListener("mouseenter", function () {
          subList(dropdownItemSubList);
          element.classList.add('dropdown-item-sub-detail');
          var subListData = element.getAttribute("data-menu-sub");
          dropdownItemSubInfo.forEach(element => {
            var subContentData = element.getAttribute("data-menu-sub");
            if (subContentData == subListData) {
              subContentList(dropdownItemSubInfo);
              element.classList.add('dropdown-item-sub-info-active');
            }
          });
        });
      });
    });
})
});
mainShopList.forEach(element => {
  element.addEventListener("mouseenter", function () {
    mainListActive(mainShopList);
    element.classList.add('dropdown-item');
    var mainData = element.getAttribute("data-menu-shop");
    dropdownItemShopSub.forEach(element => {
      var subData = element.getAttribute("data-menu-shop");
      if (subData == mainData) {
        dropdownItem(dropdownItemShopSub);
        element.classList.add('dropdown-item-sub-active');
      }
      dropdownItemSubShopList.forEach(element => {
        element.addEventListener("mouseenter", function () {
          subList(dropdownItemSubShopList);
          element.classList.add('dropdown-item-sub-detail');
          var subListData = element.getAttribute("data-menu-shop-sub");
          dropdownItemShopSubInfo.forEach(element => {
            var subContentData = element.getAttribute("data-menu-shop-sub");
            if (subContentData == subListData) {
              subContentList(dropdownItemShopSubInfo);
              element.classList.add('dropdown-item-sub-info-active');
            }
          });
        });
      });
    });
})
});

// mobile menu container
mobileIcon.addEventListener('click', function () {
    menuContainer.classList.add('nav-is-toggled');
})
closeMenuContainerLevel.addEventListener('click', function () {
    menuContainer.classList.remove('nav-is-toggled');
})
navExpand.forEach(item => {
  item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
  item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'));
    item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
    item.querySelector('.close-menu-container').addEventListener('click', () => menuContainer.classList.remove('nav-is-toggled'));
});

// search btn
searchIcon.addEventListener('click', function () {
    searchContainer.style.display = 'block';
    setTimeout(function () {
        searchContainer.classList.add('active');
    },100)
})
closeSearchContainer.addEventListener('click', function () {
    searchContainer.classList.remove('active');
    setTimeout(function () {
        searchContainer.style.display = 'none';
    },500)
})

function showResult(str) {
    if (str.length == 0) {
        searchResultInput.classList.remove('active');
        setTimeout(function () {
        searchContainer.style.display = 'none';
    },500)
    }
    if (str.length >= 4) {
        searchResultInput.style.display = 'block';
        setTimeout(function () {
            searchResultInput.classList.add('active');
    },100)
  }
}

// slider static

var swiper = new Swiper(".slider-sections-slides", {
      slidesPerView: "auto",
      spaceBetween: 10,
});

// login register
loginBtnDesktop.addEventListener('click', () => {
    overlayOpen();
    loginRegisterOpen()
})
loginBtnMobile.addEventListener('click', () => {
    overlayOpen();
    loginRegisterOpen()
})
backgroundOverlay.addEventListener('click', () => {
    overlayClose()
    loginRegisterClose()
})
closeLoginRegister.addEventListener('click', () => {
    overlayClose()
    loginRegisterClose()
})
function overlayOpen() {
    backgroundOverlay.style.display = 'block';
    setTimeout(() => {
        backgroundOverlay.classList.add('active');
    }, 100);
}
function overlayClose() {
    backgroundOverlay.classList.remove('active');
    setTimeout(() => {
        backgroundOverlay.style.display = 'none';
    }, 500);
}
function loginRegisterOpen() {
    loginRegister.style.display = 'block';
    setTimeout(() => {
        mainSignupContainer.classList.add('active');
    }, 100);
}
function loginRegisterClose() {
mainSignupContainer.classList.remove('active');
    setTimeout(() => {
        loginRegister.style.display = 'none';
    }, 500);
}

// form step
// Elements
const numberCodeForm = document.querySelector('[data-number-code-form]');
const numberCodeResetForm = document.querySelector('[data-number-code-reset-form]');
const numberCodeInputs = [...numberCodeForm.querySelectorAll('[data-number-code-input]')];
const numberCodeResetInputs = [...numberCodeResetForm.querySelectorAll('[data-number-code-reset-input]')];

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

// Event listeners
numberCodeForm.addEventListener('input', handleInput);
numberCodeForm.addEventListener('keydown', handleKeyDown);
numberCodeResetForm.addEventListener('input', handleInputReset);
numberCodeResetForm.addEventListener('keydown', handleKeyDownReset);

// dynamic forms
const formSignLevel1 = document.querySelector('#signup-phone');
const formSignReset = document.querySelector('#signup-phone-reset');
const formPasswordReset = document.querySelector('#password-reset-form');
const signupPhoneReset = document.querySelector('#signup-phone-reset-code');
const inputPhone = document.querySelector('input#phone');
const inputPhoneReset = document.querySelector('input#phone-reset');
const buttonPhoneSubmit = document.querySelector('input#submit-phone');
const buttonPhoneReset = document.querySelector('input#submit-phone-reset');
const buttonLoginCodeOneTime = document.querySelector('#login-code-one-time');
const formLevel1 = document.querySelector('#level-1');
const formLevel2 = document.querySelector('#level-2');
const formLevel3 = document.querySelector('#level-3');
const formLevel4 = document.querySelector('#level-4');
const formLevel5 = document.querySelector('#level-5');
const formLevel6 = document.querySelector('#level-6');
const formLevel7 = document.querySelector('#level-7');
const formLevel8 = document.querySelector('#level-8');
const codeTime = document.querySelector('#code-time');
const codeTimeReset = document.querySelector('#code-time-reset');
const codeTimeBox = document.querySelector('#code-timer');
const codeTimeBoxReset = document.querySelector('#code-timer-reset');
const sendCode = document.querySelector('#sendCode');
const sendCodeReset = document.querySelector('#sendCodeReset');
const preLevelIcon = document.querySelectorAll('.pre-level');

formSignLevel1.addEventListener('submit', (e) => {
    e.preventDefault();
})
formSignReset.addEventListener('submit', (e) => {
    e.preventDefault();
})
signupPhoneReset.addEventListener('submit', (e) => {
    e.preventDefault();
    formLevel6.style.display = 'none';
    formLevel7.style.display = 'flex';
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
formPasswordReset.addEventListener('submit', (e) => {
    e.preventDefault();
    formLevel7.style.display = 'none';
    formLevel8.style.display = 'flex';
})
loginPassword.addEventListener('click', (e) => {
    formLevel3.style.display = 'none';
    formLevel4.style.display = 'flex';
})
resetPassword.addEventListener('click', (e) => {
    formLevel4.style.display = 'none';
    formLevel5.style.display = 'flex';
})
buttonLoginCodeOneTime.addEventListener('click', () => {
        formLevel4.style.display = 'none';
        formLevel3.style.display = 'flex';
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
buttonPhoneReset.addEventListener('click', () => {
    const counterTimeCodeReset = codeTimeReset.getAttribute('data-time');
    if (inputPhone.value) {
        formLevel5.style.display = 'none';
        formLevel6.style.display = 'flex';
        let i = counterTimeCodeReset;
        counterCode = setInterval(function() {
	    if (i > 0) {
            i--
        }
        codeTimeReset.textContent = i;
            if (i == 0) {
                clearInterval(counterCode);
                codeTimeBoxReset.style.display = 'none';
                sendCodeReset.style.display = 'block';
                
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
