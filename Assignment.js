// ============================================
// JAVASCRIPT MINI SHOP — ASSIGNMENT FILE
// Complete all TODO sections
// Do NOT create new files
// ============================================

let prompt = require("prompt-sync")();

// ============================================
// TASK 1 — Create Storage
// ============================================

// TODO:
// Create an empty array called orders
// This will store all order objects



// ============================================
// TASK 2 — Item Price Function
// ============================================

// TODO:
// Create a function getItemPrice(item)
// Use if/else to return prices:
//
// book → 300
// pen → 50
// bag → 1200
// anything else → return 0
//
// Must use return


function getItemPrice(item) {

}



// ============================================
// TASK 3 — Tax Calculator Function
// ============================================

// TODO:
// Create function addTax(amount)
// Add 16% tax
// Use Math.round() on final result
// Return total


function addTax(amount) {

}



// ============================================
// TASK 4 — Total Calculator Function
// ============================================

// TODO:
// Create function calculateTotal(price, quantity)
// Multiply price * quantity
// Return result


function calculateTotal(price, quantity) {

}



// ============================================
// TASK 5 — Transaction ID Generator
// ============================================

// TODO:
// Create function generateTransactionId()
// Use:
// Math.random()
// Math.floor()
// Return a random 5-digit number


function generateTransactionId() {

}



// ============================================
// TASK 6 — Delivery Fee Function
// ============================================

// TODO:
// Create function calculateDelivery(distance)
// Delivery = distance * 12.5
// Use Math.ceil()
// Return delivery fee


function calculateDelivery(distance) {

}



// ============================================
// TASK 7 — User Input
// ============================================

// TODO:
// Prompt user for:
// name
// item
// quantity
// delivery distance (km)

let customerName =
let item =
let quantity =
let distance =


// convert quantity and distance to Number



// ============================================
// TASK 8 — Validation
// ============================================

// TODO:
// If quantity < 1 → print "Invalid quantity" and stop program
// If item price is 0 → print "Item not available" and stop program



// ============================================
// TASK 9 — Calculations
// ============================================

// TODO:
// Get item price using getItemPrice()
// Calculate subtotal using calculateTotal()
// Add tax using addTax()
// Calculate delivery fee using calculateDelivery()
// Generate transaction id



// ============================================
// TASK 10 — Create Order Object
// ============================================

// TODO:
// Create order object with:
//
// transactionId
// name
// item
// quantity
// price
// subtotal
// totalWithTax
// deliveryFee
// finalTotal
// date



// ============================================
// TASK 11 — Save Order
// ============================================

// TODO:
// Push order into orders array



// ============================================
// TASK 12 — Print Receipt
// ============================================

// TODO:
// Print a clean receipt using console.log
// Show all order details



// ============================================
// TASK 13 — Print All Orders
// ============================================

// TODO:
// console.log the orders array



// ============================================
// EXTENSION CHALLENGES (OPTIONAL)
// ============================================

// ⭐ Add discount function using Math.floor
// ⭐ Add random coupon using Math.random
// ⭐ Allow 3 different customers
// ⭐ Show highest order total
// ⭐ Count total orders
