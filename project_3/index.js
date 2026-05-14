const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
}

function promptName() {
  rl.question('Enter your Name: ', (name) => {
    if (name.trim() === '') {
      console.log('Error: Name cannot be empty. Please try again.\n');
      promptName();
    } else {
      promptEmail(name.trim());
    }
  });
}

function promptEmail(name) {
  rl.question('Enter your Email address: ', (email) => {
    if (!validateEmail(email.trim())) {
      console.log('Error: Invalid email format. Please try again (e.g., user@example.com).\n');
      promptEmail(name);
    } else {
      promptPhone(name, email.trim());
    }
  });
}

function promptPhone(name, email) {
  rl.question('Enter your Phone number (digits only): ', (phone) => {
    if (!validatePhone(phone.trim())) {
      console.log('Error: Phone number must contain only digits. Please try again.\n');
      promptPhone(name, email);
    } else {
      displayInformation(name, email, phone.trim());
    }
  });
}

function displayInformation(name, email, phone) {
  console.log('\n==================================');
  console.log('--- Successful Validation Data ---');
  console.log('==================================');
  console.log(`Name:  ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log('==================================\n');
  
  rl.close();
}

console.log('====================================');
console.log('--- CLI Input Validation Program ---');
console.log('====================================\n');
promptName();
