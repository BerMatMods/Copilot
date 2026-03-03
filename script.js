// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const appointmentDate = document.getElementById('appointment-date').value;

    let valid = true;
    if (name === '') {
        alert('Name must be filled out.');
        valid = false;
    }
    if (email === '') {
        alert('Email must be filled out.');
        valid = false;
    }
    if (appointmentDate === '') {
        alert('Appointment date must be selected.');
        valid = false;
    }
    return valid;
}

// Appointment Booking
document.getElementById('book-appointment').addEventListener('click', function() {
    if (validateForm()) {
        alert('Appointment booked successfully!');
        // additional code to handle booking can go here
    }
});

// Interactive Features
function toggleServiceDetails() {
    const details = document.getElementById('service-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('toggle-services').addEventListener('click', toggleServiceDetails);