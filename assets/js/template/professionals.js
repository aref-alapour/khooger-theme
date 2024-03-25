//FaQ Accordion
const accordion = document.getElementsByClassName('container');
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// ReadMore
const readMoreClick = document.querySelector('#read-more-comment-content'),
  readMoreContent = document.querySelector('#body-comment-content');

readMoreClick.addEventListener('click', () => {
  readMoreContent.classList.toggle('show');
})

// PlansType
const swichYear = document.querySelector('#swich-year'),
  swichMonths = document.querySelector('#swich-months'),
  aboutPlaneBtn = document.querySelectorAll('.about-plane'),
  contentAboutPlane = document.querySelectorAll('.content-about-plane'),
  countPrice = document.querySelectorAll('.count'),
  typePrice = document.querySelectorAll('.type');

swichYear.addEventListener('click', () => {
  swichYear.classList.add('active');
  swichMonths.classList.remove('active');
  countPrice.forEach(element => {
    element.textContent = element.getAttribute('data-price-year');
  });
  typePrice.forEach(element => {
    element.textContent = 'سالیانه';
  });
})
swichMonths.addEventListener('click', () => {
  swichMonths.classList.add('active');
  swichYear.classList.remove('active');
  countPrice.forEach(element => {
    element.textContent = element.getAttribute('data-price-month');
  });
  typePrice.forEach(element => {
    element.textContent = 'ماهیانه';
  });
})
aboutPlaneBtn.forEach(element => {
  element.addEventListener('click', function(){
    let thisContent = this.nextElementSibling;
    thisContent.classList.toggle('show');
  })
});

// call 
const callSupport = document.querySelectorAll('.call'),
  tabSupport = document.querySelectorAll('.tab-support'),
  tabContent = document.querySelectorAll('.tab-content'),
  callSupportContainer = document.querySelector('#callSupportContainer'),
  massageContent = document.querySelector('#massage-content'),
  callContent = document.querySelector('#call-content'),
  supportMainContent = document.querySelector('#supportMainContent'),
  closeCallSupport = document.querySelector('#close-callSupport');


let tabActive = function () {
  tabSupport.forEach(element => {
    element.classList.remove('active');
  });
}
let tabContentActive = function () {
  tabContent.forEach(element => {
    element.style.display = 'none'
  });
}
tabSupport.forEach(element => {
  element.addEventListener('click', function () {
    tabActive()
    this.classList.add('active');
    let tabName = this.getAttribute('data-tab');
      tabContentActive();
      if (tabName == 'massage') {
        massageContent.style.display = 'block'
      }
      if (tabName == 'call') {
        callContent.style.display = 'block'
      }
  })
});
let callSupportContainerOpen = function () {
  backgroundOverlay.style.display = 'block';
  callSupportContainer.style.display = 'block';
  setTimeout(() => {
    backgroundOverlay.classList.add('active');
  }, 100);
  setTimeout(() => {
    supportMainContent.classList.add('active');
  }, 200);
}
let callSupportContainerClose = function () {
  backgroundOverlay.classList.remove('active');
  supportMainContent.classList.remove('active');
  setTimeout(() => {
    backgroundOverlay.style.display = 'none';
  }, 500);
  setTimeout(() => {
    callSupportContainer.style.display = 'none';
  }, 500);
}
callSupport.forEach(element => {
  element.addEventListener('click', () => {
    console.log('click');
    callSupportContainerOpen()
  })
});
closeCallSupport.addEventListener('click', () => {
  callSupportContainerClose()
})
backgroundOverlay.addEventListener('click', () => {
  callSupportContainerClose();
})