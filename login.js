document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Add your login logic here, such as checking username and password
    // For demo purposes, let's just log the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Password:', password);
    // You can replace the above console.log statements with your actual login logic
});
