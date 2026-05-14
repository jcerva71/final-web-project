let headerMain = document.querySelector(".header-main");
let headerMobileBtn = document.querySelector(".mobile-menu-btn");

let isMenuOpen = false;

headerMobileBtn.addEventListener("click", function() {
    if (!isMenuOpen) {
        headerMain.style.display = 'flex';
        isMenuOpen = true;
    }
    else if (isMenuOpen) {
        headerMain.style.display = 'none';
        isMenuOpen = false;
    }
});

// Form validation for contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contactForm form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('messageError').textContent = '';
            
            let isValid = true;
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate name
            if (name === '') {
                document.getElementById('nameError').textContent = 'Name is required.';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                document.getElementById('emailError').textContent = 'Email is required.';
                isValid = false;
            } else if (!emailRegex.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                document.getElementById('messageError').textContent = 'Message is required.';
                isValid = false;
            }
            
            if (isValid) {
                // If valid, you can submit the form or show success message
                alert('Form submitted successfully!');
                // form.submit(); // Uncomment if you want to actually submit
            }
        });
    }
});

