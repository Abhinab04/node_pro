// Import the express module to build our web server
const express = require('express');
// Import the path module to easily handle file and directory paths
const path = require('path');

// Initialize the express application
const app = express();

// Set EJS as the view engine for rendering dynamic HTML
app.set('view engine', 'ejs');
// Define the directory where EJS templates (views) are located
app.set('views', path.join(__dirname, 'views'));

// Middleware setup to serve static files (like CSS) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define our restaurant schedule array. 
// dayId matches the integer returned by JavaScript's Date.getDay() (0 = Sunday, 1 = Monday, etc.)
const schedule = [
    { dayId: 0, name: 'Sunday', hours: '10:00 AM - 10:00 PM' },
    { dayId: 1, name: 'Monday', hours: 'Closed' },
    { dayId: 2, name: 'Tuesday', hours: '11:00 AM - 9:00 PM' },
    { dayId: 3, name: 'Wednesday', hours: '11:00 AM - 9:00 PM' },
    { dayId: 4, name: 'Thursday', hours: '11:00 AM - 9:00 PM' },
    { dayId: 5, name: 'Friday', hours: '11:00 AM - 11:00 PM' },
    { dayId: 6, name: 'Saturday', hours: '10:00 AM - 11:00 PM' }
];

// Define the root route ('/') to display the operating hours
app.get('/', (req, res) => {
    // Determine the current day using the built-in Date object
    const today = new Date().getDay();
    
    // Render the 'hours.ejs' template, passing in the title, schedule array, and the current day's integer
    res.render('hours', { 
        title: 'Restaurant Hours', 
        schedule: schedule, 
        currentDay: today 
    });
});

// Define the port for the server
const PORT = 3000;

// Start the server and listen on the given port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
