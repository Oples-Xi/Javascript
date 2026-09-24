let currentYear = 2026;
let userName = prompt("Enter your name:");
const BIRTH_YEAR = 2005;
let birthYear = Number(prompt("Enter your year of birth:"));
let age = currentYear - BIRTH_YEAR;

age++;

console.log(`Your approximate age: ${age}`);
