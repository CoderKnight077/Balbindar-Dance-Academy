
// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function () {
    let menu = document.querySelector('.hamburger-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Booking Form Toggle
document.getElementById('open-booking').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('booking-form').style.display = 'block';
});

document.getElementById('close-booking').addEventListener('click', function () {
    document.getElementById('booking-form').style.display = 'none';
});


