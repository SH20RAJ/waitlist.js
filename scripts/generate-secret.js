#!/usr/bin/env node

const crypto = require('crypto');

// Generate a random string of 32 bytes and convert it to a hex string
const secret = crypto.randomBytes(32).toString('hex');

console.log('Generated NEXTAUTH_SECRET:');
console.log(secret);
console.log('\nAdd this to your .env file:');
console.log(`NEXTAUTH_SECRET="${secret}"`);
