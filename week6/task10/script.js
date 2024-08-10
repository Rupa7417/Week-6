document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting for demo purposes
    
    // Simulate a form submission failure
    showErrorMessage();
});

function showErrorMessage() {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.style.display = 'block';
}
