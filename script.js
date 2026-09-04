// ==========================================
// Step 1: Storing Data in Arrays
// ==========================================
let numbers =;
document.getElementById("output").innerHTML += "<pre><b>[Step 1] Array contents:</b> " + numbers.join(", ") + "</pre>";

// ==========================================
// Step 2 & 3: Replacing Decisions & Using Constants
// ==========================================
let grades = ['F', 'D', 'C', 'B', 'A'];
const GRADE_COUNT = 5;
let score = 85; 
let gradeIndex = Math.floor(score / (100 / GRADE_COUNT));
if (gradeIndex >= GRADE_COUNT) { gradeIndex = GRADE_COUNT - 1; }
let grade = grades[gradeIndex];
document.getElementById("output").innerHTML += "<pre><b>[Step 2 & 3] Grade Calculation:</b> Score: " + score + " => Grade: " + grade + "</pre>";

// ==========================================
// Step 4: Searching an Array for an Exact Match
// ==========================================
function searchArray(arr, value) { return arr.indexOf(value); }
let searchValue = 30;
let foundIndex = searchArray(numbers, searchValue);
document.getElementById("output").innerHTML += "<pre><b>[Step 4] Exact Match Search:</b> Searching for " + searchValue + ": " + (foundIndex !== -1 ? "Found at index " + foundIndex : "Not found") + "</pre>";

// ==========================================
// Step 5: Using Parallel Arrays
// ==========================================
let studentNames = ["Alice", "Bob", "Charlie"];
let studentGrades = ["A", "B", "C"];
let studentIndex = studentNames.indexOf("Bob");
let studentGrade = studentGrades[studentIndex];
document.getElementById("output").innerHTML += "<pre><b>[Step 5] Parallel Arrays Lookup:</b> Bob's Grade: " + studentGrade + "</pre>";

// ==========================================
// Step 6: Searching an Array for a Range Match
// ==========================================
function searchRange(arr, min, max) { return arr.filter(value => value >= min && value <= max); }
let rangeResult = searchRange(numbers, 15, 45);
document.getElementById("output").innerHTML += "<pre><b>[Step 6] Range Match Search:</b> Values between 15 and 45: " + rangeResult.join(", ") + "</pre>";

// ==========================================
// Step 7: Remaining within Array Bounds
// ==========================================
let boundsIndex = 10; 
let safeValue = boundsIndex >= 0 && boundsIndex < numbers.length ? numbers[boundsIndex] : "Index out of bounds";
document.getElementById("output").innerHTML += "<pre><b>[Step 7] Bounds Checking:</b> Accessing index " + boundsIndex + ": " + safeValue + "</pre>";

// ==========================================
// Step 8: Using a for Loop to Process an Array
// ==========================================
let sum = 0;
for (let i = 0; i < numbers.length; i++) { sum += numbers[i]; }
document.getElementById("output").innerHTML += "<pre><b>[Step 8] For Loop Processing:</b> Sum of array elements: " + sum + "</pre>";

// ==========================================
// Step 9: Simulating File Operations
// ==========================================
let fileData = ["Record1", "Record2", "Record3"];
function readFile() { return fileData.join("\n"); }
function writeFile(newRecord) { fileData.push(newRecord); }
writeFile("Record4");
document.getElementById("output").innerHTML += "<pre><b>[Step 9] Simulated File Content:</b>\n" + readFile() + "</pre>";