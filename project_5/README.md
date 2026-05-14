# Restaurant Website Project

A simple Node.js, Express, and EJS project for a restaurant website, created as a college mini project.

## Project Structure
- `index.js`: The main server file that sets up Express, configures routes, and serves the application on port 3000.
- `package.json`: Contains project metadata and lists the dependencies (Express and EJS).
- `views/`: Contains the EJS templates (`index.ejs` and `about.ejs`) that render the HTML pages.
- `public/`: Contains static assets like `style.css` which handles the layout and design.

## Installation Steps
1. Make sure you have **Node.js** installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).
2. Open a terminal or command prompt.
3. Navigate to the `project_5` folder:
   ```bash
   cd path/to/project_5
   ```
4. Run the following command to install the required dependencies:
   ```bash
   npm install
   ```
   *(This will read `package.json` and download `express` and `ejs` into a `node_modules` folder).*

## Commands to Run the Project
1. While inside the `project_5` folder, run the following command to start the server:
   ```bash
   node index.js
   ```
   *(Or you can run `npm start` which does the same thing based on the `package.json` script).*
2. Open your web browser and go to `http://localhost:3000`.

## Expected Output Explanation
- When you navigate to `http://localhost:3000`, the Express server receives a GET request for the `/` route. It responds by rendering the `index.ejs` file, sending the Home page to your browser.
- When you click on the "About" link (or go to `http://localhost:3000/about`), the server receives a request for the `/about` route and renders the `about.ejs` file.
- The `style.css` file stored in the `public` folder is served as a static asset via Express middleware, ensuring both pages have a consistent, attractive design.

## Sample Screenshots Description for Report Writing
If you are writing a project report, here is how you can describe your screenshots:

1. **Screenshot 1: The Homepage (`/`)**
   - **Description**: Displays the landing page of "The Grand Feast" restaurant. It shows a modern, dark top navigation bar containing the brand logo on the left and clickable "Home" and "About" links on the right. Below the navigation, a white centered container displays a welcoming heading and introductory paragraphs over a light gray background.

2. **Screenshot 2: The About Page (`/about`)**
   - **Description**: Displays the About page, illustrating the seamless routing of the application. The page retains the same layout and navigation bar for consistency. The main content area features the heading "About Our Restaurant" along with professional paragraphs detailing the restaurant's history, mission, and commitment to quality service.

3. **Screenshot 3: Terminal / Command Prompt**
   - **Description**: Shows the execution of the `node index.js` command in the terminal. The output log `Server is running on http://localhost:3000` is visible, demonstrating that the backend Node.js server has successfully initialized and is listening for incoming HTTP requests.
