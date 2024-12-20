document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset error messages
    resetErrors();
    
    // Form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const destination = document.getElementById('destination').value;

    let isValid = true;

    // Validate name
    if (name === "") {
        document.getElementById('name-error').textContent = "Name is required.";
        isValid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('email-error').textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Validate start and end dates
    if (startDate === "") {
        document.getElementById('start-date-error').textContent = "Start date is required.";
        isValid = false;
    }
    if (endDate === "") {
        document.getElementById('end-date-error').textContent = "End date is required.";
        isValid = false;
    } else if (new Date(endDate) < new Date(startDate)) {
        document.getElementById('end-date-error').textContent = "End date must be after start date.";
        isValid = false;
    }

    // Validate destination
    if (destination === "") {
        document.getElementById('destination-error').textContent = "Please select a destination.";
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Booking Confirmed! Your trip is scheduled.");
        document.getElementById('booking-form').reset(); // Reset form
    }
});

// Reset error messages
function resetErrors() {
    const errorElements = document.querySelectorAll('.form-text.text-danger');
    errorElements.forEach((error) => {
        error.textContent = "";
    });
}

// Email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
