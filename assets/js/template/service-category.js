const locationIcon = document.querySelector('#locationIcon'),
    locationMap = document.querySelector('.locationMap'),
    locationClose = document.querySelector('#locationClose'),
    locationsGoogleMap = document.querySelector("#locationsGoogleMap");

locationIcon.addEventListener('click', () => {
    locationMap.style.display = 'block';
    setTimeout(() => {
        locationMap.classList.add('active');
    }, 100);
})
locationClose.addEventListener('click', () => {
    locationMap.classList.remove('active');
    setTimeout(() => {
        locationMap.style.display = 'block';
    }, 600);
})

