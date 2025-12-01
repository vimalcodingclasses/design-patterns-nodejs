import { Book } from "./Book";

// 1. Create the initial Prototype instance
const originalChapters = ['Ch1: Intro', 'Ch2: Basics'];

const masterBook = new Book(
    "Patterns Reference Guide",
    "E. Gamma",
    69.99,
    originalChapters
);

console.log('--- 📚 Original Master Book ---');
masterBook.displayDetails();

// 2. Create an instance using SHALLOW CLONE
const budgetBook: any = masterBook.clone();
budgetBook.title = "Basic Patterns Workbook";
budgetBook.price = 30.00;

// Modify the 'data' array in the clone. This also modifies the original!
budgetBook.data.push('Ch3: Shallow Pitfall');

console.log('\n--- 📗 Budget Edition (Shallow Clone) ---');
budgetBook.displayDetails();


// 3. Create an instance using DEEP CLONE
const advancedBook: any = masterBook.deepClone();
advancedBook.title = "Advanced Patterns & Exercises";

// Modify the 'data' array in this clone. This DOES NOT modify the original.
advancedBook.data.push('Ch4: Deep Success');

console.log('\n--- 📘 Advanced Edition (Deep Clone) ---');
advancedBook.displayDetails();

console.log('\n--- 🔍 Checking Original After Clones ---');
masterBook.displayDetails();
// The original now shows 'Ch3: Shallow Pitfall' but NOT 'Ch4: Deep Success'.