const fs = require('fs');

// Create
fs.writeFileSync('demo.txt', 'Hello Mihir!');

// Read
console.log(fs.readFileSync('demo.txt', 'utf8'));

// Update
fs.appendFileSync('demo.txt', '\nWelcome to Node.js');

// Read updated content
console.log(fs.readFileSync('demo.txt', 'utf8'));

// Delete
fs.unlinkSync('demo.txt');

console.log('File deleted successfully');