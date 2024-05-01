
    function validateSignup() {
        // Get form inputs
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var password = document.getElementById('password').value;
        var passwordConfirm = document.getElementById('password-confirm').value;

        // Validate name
        if (name.length < 2) {
            alert('Name must be at least 2 characters long.');
            return false;
        }

        // Validate email
        if (!isValidEmail(email)) {
            alert('Invalid email address.');
            return false;
        }

        // Validate phone 
        if (phone && !isValidPhone(phone)) {
            alert('Invalid phone number. Please enter a 10-digit number.');
            return false;
        }

        // Validate password length
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return false;
        }

        // Validate password match
        if (password !== passwordConfirm) {
            alert('Passwords do not match.');
            return false;
        }

        // If all validations pass, return true to allow form submission
        return true;
    }

    // Email validation function
    function isValidEmail(email) {
        // Simple email validation logic
        return email.includes('@') && email.includes('.');
    }

    // Phone number validation function
    function isValidPhone(phone) {
        // Simple phone number validation logic
        return /^\d{10}$/.test(phone); // Checks if phone consists of 10 digits
    }

