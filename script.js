//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const submitButton = document.getElementById('submit');
    const existingButton = document.getElementById('existing');

    // Check if user data exists in localStorage
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.display = 'block';
    }

    // Submit form event
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkbox.checked) {
            // Save to localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove from localStorage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    // Login as existing user event
    existingButton.addEventListener('click', () => {
        const storedUsername = localStorage.getItem('username');
        alert(`Logged in as ${storedUsername}`);
    });
});
