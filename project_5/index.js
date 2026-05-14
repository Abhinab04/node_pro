// Import the express module
const express = require('express');
// Import path module to handle file paths easily
const path = require('path');

// Initialize the express application
const app = express();

// Configure Express to use EJS as the view engine
app.set('view engine', 'ejs');
// Set the directory where the view templates are located
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (like CSS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage ('/')
app.get('/', (req, res) => {
    // Render the 'index.ejs' template and pass data
    res.render('index', { title: 'Home - The Grand Feast' });
});

// Route for the About page ('/about')
app.get('/about', (req, res) => {
    // Render the 'about.ejs' template and pass data
    res.render('about', { title: 'About Us - The Grand Feast' });
});

// Define the port for the server
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
