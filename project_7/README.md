Project 9 — Task 7: Configurable Password Hashing

Usage:
1. Install dependencies:
   npm install

2. Add a new user with configurable salt rounds:
   node index.js add
   - You'll be prompted for Username, Password, and Salt rounds (default 10).

3. Verify a user's password:
   node index.js verify
   - Prompts for Username and Password; uses stored salt to hash and compare.

4. List stored users (shows salt rounds):
   node index.js list

Notes:
- This project stores data in `authCollection.json` as a simple array of records.
- Not for production — simple demo for assignment requirements.
