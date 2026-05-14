# Dynamic Restaurant Hours Project

A Node.js, Express, and EJS project that dynamically highlights the current operating day of a restaurant.

## Step-by-Step Setup Instructions
1. **Install Node.js**: Ensure you have Node.js installed on your system.
2. **Open Terminal**: Navigate to your workspace directory (`project_6`).
3. **Initialize Project**: Ensure the `package.json` file is present in the folder.
4. **Install Dependencies**: Run the npm install command to download the required Node modules (`express` and `ejs`).
5. **Start Server**: Execute the `index.js` file using Node to start the backend server.

## npm Install Commands
```bash
npm install
```

## How to Run the Project
1. Open your terminal or command prompt inside the `project_6` folder.
2. Type the following command and press Enter:
   ```bash
   node index.js
   ```
3. Open your web browser and navigate to `http://localhost:3000`.

*(Note: If you have a server currently running on port 3000 from a previous project, make sure to terminate it by pressing `Ctrl + C` in its respective terminal window before starting this project).*

## Output Explanation
When you visit `http://localhost:3000`, the Express server identifies the current day using JavaScript's `new Date().getDay()`. It passes this day integer (0 for Sunday, 1 for Monday, etc.) alongside an array of all restaurant timings to the `hours.ejs` template.
The EJS template iterates through the schedule array. If the loop's current iteration matches today's integer, it applies a `.highlight` CSS class (altering the background color and adding a blue accent border) and dynamically displays an "Open Today" green badge next to the timing.

## Mini Project Report Explanation
For a college mini project report, you can describe this application as a **dynamic server-side rendered application**.
- **Frontend**: Built with HTML, CSS, and EJS templating. It utilizes an elegant, responsive card-based layout that adapts gracefully to both mobile and desktop screens.
- **Backend**: Built with Node.js and the Express framework. The central logic dynamically calculates the user's current day in real-time.
- **Dynamic Feature Highlight**: Unlike a static HTML website, this web page automatically updates its user interface every day at midnight without requiring any manual code changes. This is achieved through conditional EJS templating (`<% if (day.dayId === currentDay) { %>`).

## Viva Questions and Answers

**Q1: What is Express.js and why did you use it?**
**Answer**: Express.js is a minimal and flexible web application framework for Node.js. It drastically simplifies the process of creating web servers, configuring routes (like `app.get('/')`), and handling middleware (like serving static CSS files).

**Q2: What is EJS and how does it differ from standard HTML?**
**Answer**: EJS stands for Embedded JavaScript. It is a templating engine that lets us inject dynamic JavaScript logic (using `<% %>` tags) directly into our HTML code. Unlike standard static HTML, EJS allows the server to pass in data, execute loops, and evaluate conditional statements before sending the final webpage to the client.

**Q3: How does the application know what day it is today?**
**Answer**: In `index.js`, we utilize the built-in JavaScript `Date` object and call the `getDay()` method (`new Date().getDay()`). This returns an integer representing the day of the week (0 for Sunday, up to 6 for Saturday), which is then passed to the EJS template to perform the conditional matching.

**Q4: How did you apply styles specifically to the current highlighted day?**
**Answer**: Inside the EJS template's `forEach` loop, I used a conditional statement inside the HTML class attribute: `<%= day.dayId === currentDay ? 'highlight' : '' %>`. When the condition is met, the string 'highlight' is injected into the class. The associated CSS file targets `.highlight` to modify the row's background, text color, and border.

**Q5: What is the purpose of `app.use(express.static('public'))`?**
**Answer**: This line is an Express middleware function. It instructs the Express server to serve static assets—such as CSS files, images, or client-side JavaScript files—from the specified `public` directory. Without it, the browser would not be permitted to fetch and apply `style.css`.
