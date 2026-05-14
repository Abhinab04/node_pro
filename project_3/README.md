# CLI Input Validation Analysis

This is a complete, beginner-friendly Node.js command-line interface (CLI) project. It demonstrates how to interactively prompt users for input, validate that input using regular expressions (Regex), and handle errors by recursively prompting until correct input is provided.

---

## 🚀 Setup Instructions

Follow these step-by-step instructions to install and run the project.

### Prerequisites
- Node.js installed on your computer.

### Step-by-step Installation Guide
1. Open your terminal or command prompt.
2. Navigate to the project directory:
   ```bash
   cd project_3
   ```
3. (Optional) Run `npm install` to initialize the environment (though this project uses only built-in Node.js modules, so no external dependencies are strictly needed).
4. Run the project:
   ```bash
   npm start
   ```
   *(Alternatively, you can run `node index.js`)*

---

## 💻 Sample Input / Output Examples

### Expected Terminal Output (Valid Inputs)
```
====================================
--- CLI Input Validation Program ---
====================================

Enter your Name: John Doe
Enter your Email address: john.doe@example.com
Enter your Phone number (digits only): 1234567890

==================================
--- Successful Validation Data ---
==================================
Name:  John Doe
Email: john.doe@example.com
Phone: 1234567890
==================================
```

### Expected Terminal Output (Invalid Inputs)
```
====================================
--- CLI Input Validation Program ---
====================================

Enter your Name: 
Error: Name cannot be empty. Please try again.

Enter your Name: Jane Doe
Enter your Email address: jane.doe.com
Error: Invalid email format. Please try again (e.g., user@example.com).

Enter your Email address: jane@doe.com
Enter your Phone number (digits only): 123abc456
Error: Phone number must contain only digits. Please try again.

Enter your Phone number (digits only): 9876543210

==================================
--- Successful Validation Data ---
==================================
Name:  Jane Doe
Email: jane@doe.com
Phone: 9876543210
==================================
```

---

## 📄 Mini Project Report Content

### 1. Introduction
Data validation is a crucial part of software development. It ensures that user inputs conform to expected formats before processing them further, reducing bugs and security vulnerabilities. This project implements a CLI application in Node.js to analyze and demonstrate real-time email and phone number validation using Regular Expressions (Regex) and recursive prompting logic.

### 2. How Regular Expressions Work for Validation
Regular Expressions (Regex) are sequences of characters that define a search pattern. 
- **Email Regex (`/\S+@\S+\.\S+/`)**: It looks for any sequence of non-whitespace characters (`\S+`), followed by an `@` symbol, followed by more non-whitespace characters representing the domain, a literal dot (`\.`), and a Top-Level Domain (`\S+`).
- **Phone Regex (`/^\d+$/`)**: It ensures that from the beginning (`^`) to the end (`$`) of the string, there is one or more (`+`) numeric digits (`\d`). 

### 3. Strengths of the Regex Patterns
- **Simplicity**: They are short, highly readable, and beginner-friendly.
- **Speed**: These patterns require minimal computational power, making the validation process nearly instantaneous.
- **Immediate Feedback**: They effectively filter out obvious mistakes like letters in a phone number or a missing "@" sign in an email.

### 4. Limitations of the Regex Patterns
- **Email Regex**: The pattern `\S+@\S+\.\S+` accepts strings like `invalid@domain.c`, which has a 1-letter TLD (which are rarely valid). It does not strictly enforce valid characters (e.g., symbols not allowed in emails).
- **Phone Regex**: The pattern `^\d+$` allows any number of digits. It does not enforce length constraints (e.g., a standard 10-digit number) or formatting conventions like country codes (`+1`).

### 5. How Validation Ensures Data Integrity
By rejecting incorrectly formatted data at the entry point, the system prevents "garbage data" from being stored in databases or causing crashes in downstream operations (like sending an email to a string that isn't a valid email address).

### 6. Possible Edge Cases Where Validation May Fail
- **Valid, but not Real**: `fake@fake.fake` passes the email regex but is not a functional email.
- **Whitespace Issues**: Accidental spaces inside the email input might fail the `\S+` check. (Handled partially by `.trim()` before validation).
- **Extremely Long Inputs**: A user entering a 1000-digit phone number will pass the `^\d+$` check but might cause database issues later.

### 7. Improvements for Better Validation and User Experience
- Use more robust, RFC-compliant regular expressions for emails.
- Add length constraints for phone numbers (e.g., `/^\d{10}$/` for exactly 10 digits).
- Validate domain existence (checking DNS records) to ensure the email is real.
- Give more granular error messages (e.g., "Email is missing an '@' symbol").

### 8. Conclusion
This project successfully demonstrates the fundamentals of CLI interaction, input validation, and flow control using Node.js. While the implemented regex patterns have their limitations, they serve as an excellent baseline to prevent simple data entry errors and establish the importance of data integrity.

---

## 🎓 Viva Questions and Answers

**Q1: What is the `readline` module in Node.js used for?**
**Answer:** The `readline` module provides an interface for reading data from a Readable stream (such as `process.stdin` or the terminal) one line at a time. It's commonly used to prompt users for input in CLI applications.

**Q2: How does the recursive prompting logic work in this code?**
**Answer:** When user input fails validation, the function logs an error and immediately calls itself again (e.g., `promptEmail(name)` calls `promptEmail(name)` inside the `if` block). This loop continues until valid input is provided and the `else` block executes, moving to the next stage.

**Q3: What does the `\S` mean in the email regular expression?**
**Answer:** In regex, `\S` matches any single character that is *not* a whitespace character (like spaces, tabs, or line breaks). The `+` makes it match one or more of those non-whitespace characters.

**Q4: Why do we use `^` and `$` in the phone number regex?**
**Answer:** `^` anchors the match to the start of the string, and `$` anchors it to the end. Using `/^\d+$/` ensures that the *entire* string consists only of digits. Without the anchors, a string like "123abc456" would pass because it contains digits ("123"), even though it has letters.

**Q5: What is `.trim()` doing in this project?**
**Answer:** `.trim()` is a string method that removes whitespace from both ends of a string. We use it so that if a user accidentally types a space before or after their input, the validation won't fail incorrectly.
