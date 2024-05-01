// Function to handle form submission
function login() {
  // Get form inputs
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();

  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configure the request
  xhr.open('POST', '/login', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Set up the callback function
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              // Login successful
              alert(xhr.responseText); // Display the success message
          } else {
              // Login failed
              alert('Login failed: ' + xhr.responseText); // Display the error message
          }
      }
  };

  // Send the request with form data
  xhr.send('email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));

  // Prevent the default form submission
  return false;
}