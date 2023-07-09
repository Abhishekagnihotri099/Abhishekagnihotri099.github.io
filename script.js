// script.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = new FormData(this);

    fetch('your-server-url', {
        method: 'POST',
        body: formData
    })
    .then(function (response) {
        if (response.ok) {
            // Form submission successful
            alert('Thank you for your message!');
            // You can redirect the user to a success page if desired
            // window.location.href = 'success.html';
        } else {
            // Form submission failed
            alert('Oops! An error occurred. Please try again.');
        }
    })
    .catch(function (error) {
        console.error('Error:', error);
        alert('Oops! An error occurred. Please try again.');
    });
});
