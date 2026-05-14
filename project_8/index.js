const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');
const DB_PATH = path.join(__dirname, 'passwords.json');

function loadDB() {
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, '[]', 'utf8');
  try { return JSON.parse(fs.readFileSync(DB_PATH, 'utf8')); } catch (e) { return []; }
}

function saveDB(db) { fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf8'); }

const cmd = process.argv[2];
if (!cmd) { console.log('Usage: node index.js <add|get|list>'); process.exit(1); }

if (cmd === 'add') {
  const source = readlineSync.question('Source name: ');
  const username = readlineSync.question('Username: ');
  const password = readlineSync.question('Password: ', { hideEchoBack: true });
  const db = loadDB();
  db.push({ source, username, password });
  saveDB(db);
  console.log('Saved entry for', source);
  process.exit(0);
}

if (cmd === 'get') {
  const source = readlineSync.question('Enter source name to retrieve: ');
  const db = loadDB();
  const entry = db.find(e => e.source.toLowerCase() === source.toLowerCase());
  if (!entry) {
    console.log('No matching entry found for', source);
    process.exit(1);
  }
  
  console.log('Source:', entry.source);
  console.log('Username:', entry.username);
  console.log('Password:', entry.password);
  process.exit(0);
}

if (cmd === 'list') {
  const db = loadDB();
  if (!db.length) console.log('No entries stored');
  db.forEach(e => console.log(`${e.source} -> ${e.username}`));
  process.exit(0);
}

console.log('Unknown command');
process.exit(1);
