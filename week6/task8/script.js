// script.js
function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`You searched for: ${query}`);
        // You can replace the alert with actual search functionality, like redirecting or filtering content
    } else {
        alert('Please enter a search term');
    }
}
