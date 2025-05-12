document.getElementById('google-sign-in').addEventListener('click', function() {
    authenticateUser('google');
});

document.getElementById('apple-sign-in').addEventListener('click', function() {
    authenticateUser('apple');
});

document.getElementById('microsoft-sign-in').addEventListener('click', function() {
    authenticateUser('microsoft');
});

function authenticateUser(provider) {
    alert(`Authenticated with ${provider}`);
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('resume-container').style.display = 'block';
}