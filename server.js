const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to serve the signup form (GET request)
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
});

// Route to handle signup submissions (POST request)
app.post('/signup', (req, res) => {
    // Extract data from the request body
    const { name, email, phone, password } = req.body;

    // Process signup logic here (e.g., store user data in a database)
    // For demonstration purposes, we'll just log the user data
    console.log('User registered:', { name, email, phone, password });

    // Send a response back to the client with a success message
    res.send('Thank you for signing up!'); // You can customize this message as needed
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
