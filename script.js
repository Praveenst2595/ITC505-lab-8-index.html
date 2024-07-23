document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let errors = [];
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check for empty fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errors.push('All fields are required.');
    }

    // Check for email validity
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
    }

    if (errors.length > 0) {
        event.preventDefault();
        document.getElementById('errorMessages').innerHTML = errors.join('<br>');
    } else {
        document.getElementById('errorMessages').innerHTML = '';
    }
});
