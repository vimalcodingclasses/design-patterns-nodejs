// We want to solve: "5 + 10 - 2"

import { AddExpression } from "./AddExpression";
import { NumberExpression } from "./NumberExpression";
import { SubtractExpression } from "./SubtractExpression";

// 1. Create the terminal nodes (leaves)
const five = new NumberExpression(5);
const ten = new NumberExpression(10);
const two = new NumberExpression(2);

// 2. Create the non-terminal nodes (operations)
// Structure: (5 + 10) - 2
const addition = new AddExpression(five, ten); // Evaluates to 15
const finalExpression = new SubtractExpression(addition, two); // 15 - 2

// 3. Interpret the root of the tree
console.log(`Result: ${finalExpression.interpret()}`); // Output: Result: 13