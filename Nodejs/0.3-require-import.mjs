// main.js
// import { add } from "./addNumbers.js";
// import { subtract } from "./subtractNumbers.js";
// import { multiply } from "./multiplyNumbers.js";
// ===================== q1 answer =========================================
// the difference between import and require
// in import we can import certain export components for Node.js file
// which make us able to save space and will be much faster in processing
// Loading is synchronous(step by step) for require on the other hand
// import can be asynchronous(without waiting for previous import)
// so it can perform a little better than require
// ======================================================================

// ================================ q2 answer try 1======================
// How can you enable using the import syntax using node js
// Give 2 node.js environment variables that are not available
// when using the import syntax.

// const env = require("dotenv");
// env.config();

// const ORIGIN_PORT = 8282;
// const ORIGIN_AUTHOR = "Tom Robenson";

// const { PORT = ORIGIN_PORT, AUTHOR = ORIGIN_AUTHOR } = process.env;
// console.log(PORT, AUTHOR);
// ========================================================================

// Create 3 functions using the export/import syntax:

// addNumbers.js
// const a = 5;
// const b = 7;

// export function add(a, b) {
//   return a + b;
// }

// export function
