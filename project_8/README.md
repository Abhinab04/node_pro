Project 10 — Task 8: Password Retrieval Feature

Usage:
1. Install dependencies:
   npm install

2. Add a password entry:
   node index.js add
   - Prompts for Source name, Username, Password.

3. Retrieve a stored password by source name:
   node index.js get
   - Prompts for source name and displays username and password.

4. List stored entries:
   node index.js list

Notes:
- Data is stored in `passwords.json` as a simple array of objects.
- This is a simple CLI demo for assignment purposes (not production secure storage).
