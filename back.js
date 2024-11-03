// Display an alert when the "Learn More" button is clicked
function showAlert() {
    alert("Welcome to Viswam Security Services! Contact us for detailed information.");
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for reaching out! We will get back to you soon.');
    document.getElementById('
