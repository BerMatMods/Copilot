'use strict';

// Smooth Scrolling
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Form Validation
const validateForm = () => {
    const form = document.getElementById('appointment-form');
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const date = form.querySelector('input[name="date"]').value;

    if (!name || !email || !date) {
        alert('Please fill in all fields.');
        return false;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
};

document.getElementById('appointment-form').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});

// Appointment Booking
const bookAppointment = (name, email, date) => {
    console.log(`Booking appointment for ${name} on ${date}...`);
    // Here, normally you would send this data to your server
};

// Example of how to call bookAppointment function
// Uncomment the line below to see it in action
// bookAppointment('John Doe', 'johndoe@example.com', '2023-03-03');

// Interactive Features
const interactiveFeature = () => {
    // Code for any interactive features can go here
};

// Initialize interactive features
interactiveFeature();
