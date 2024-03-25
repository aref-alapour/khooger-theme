// planSlider

var swiper = new Swiper(".planSlider", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
    
// dynamicForm
const itemTab = document.querySelectorAll('.item-tab'),
    payAmount = document.querySelectorAll('.pay-amount'),
    dateTitle = document.querySelectorAll('.date'),
    buttonPay = document.querySelectorAll('.button-pay'),
    notFree = document.querySelectorAll('.notFree'),
    level1 = document.querySelector('#level-1'),
    level2 = document.querySelector('#level-2');
let activeTab = function ($item) {
    itemTab.forEach(element => {
        planDate = element.getAttribute('data-date');
        if (planDate != $item) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    });
}
let dateExp = function ($itemDate) {
    buttonPay.forEach(element => {
        if ($itemDate == 'year') {
            element.innerHTML = 'خرید اکانت یک‌ساله'
        }
        if ($itemDate == 'month') {
            element.innerHTML = 'خرید اکانت یک‌ماهه'
        }
    });
}
let buttonTitle = function ($itemButton) {
    dateTitle.forEach(element => {
        if ($itemButton == 'year') {
            element.innerHTML = 'یک‌ساله'
        }
        if ($itemButton == 'month') {
            element.innerHTML = 'یک‌ماهه'
        }
    });
}
let pay = function ($itemPay) {
    payAmount.forEach(element => {
        let payMonth = element.getAttribute('data-month');
        let payYear = element.getAttribute('data-year');
        if ($itemPay == 'year') {
            element.innerHTML = payYear
        }
        if ($itemPay == 'month') {
            element.innerHTML = payMonth
        }
    });
}
itemTab.forEach(element => {
    element.addEventListener('click', function () {
        let elementDate = this.getAttribute('data-date');
        activeTab(elementDate);
        dateExp(elementDate);
        buttonTitle(elementDate);
        pay(elementDate);
    })
});
notFree.forEach(element => {
    element.addEventListener('submit', (e) => {
        e.preventDefault();
        level1.style.display = 'none';
        level2.style.display = 'block';
    })
});

