const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const readlineSync = require('readline-sync');
const DB_PATH = path.join(__dirname, 'authCollection.json');

function loadDB() {
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, '[]', 'utf8');
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
  } catch (e) {
    return [];
  }
}

function saveDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf8');
}

const cmd = process.argv[2];
if (!cmd) {
  console.log('Usage: node index.js <add|verify|list>');
  process.exit(1);
}

if (cmd === 'add') {
  const username = readlineSync.question('Username: ');
  const password = readlineSync.question('Password: ', { hideEchoBack: true });
  let roundsInput = readlineSync.question('Salt rounds (default 10): ');
  let rounds = parseInt(roundsInput, 10);
  if (Number.isNaN(rounds)) rounds = 10;
  if (rounds < 4) rounds = 4;
  const salt = bcrypt.genSaltSync(rounds);
  const hash = bcrypt.hashSync(password, salt);
  const db = loadDB();
  db.push({ username, saltRounds: rounds, salt, hash });
  saveDB(db);
  console.log('Saved user with configurable salt rounds:', rounds);
  process.exit(0);
}

if (cmd === 'verify') {
  const username = readlineSync.question('Username: ');
  const password = readlineSync.question('Password: ', { hideEchoBack: true });
  const db = loadDB();
  const rec = db.find(r => r.username === username);
  if (!rec) {
    console.log('No such user');
    process.exit(1);
  }

  const hashToCompare = bcrypt.hashSync(password, rec.salt);
  if (hashToCompare === rec.hash) console.log('Password is correct');
  else console.log('Incorrect password');
  process.exit(0);
}

if (cmd === 'list') {
  const db = loadDB();
  if (!db.length) console.log('No entries');
  db.forEach(r => console.log(`${r.username} (rounds: ${r.saltRounds})`));
  process.exit(0);
}

console.log('Unknown command');
process.exit(1);
