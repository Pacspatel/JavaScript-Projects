// Type Of Operator Assignment
// Create a variable and display its data type.
let name_1 = "Prakash";
document.write("Data type: " + typeof name_1);


// Type Coercion Assignment
// Combine a string and a number.
let number_1 = 10;
let text_1 = "5";
document.write("<br>Type coercion: " + number_1 + text_1);


// NaN Challenge
// Create and display NaN.
let result_1 = 10 / "Apple";
document.write("<br>NaN: " + result_1);

// Use isNaN() to display true.
document.write("<br>isNaN true: " + isNaN(result_1));

// Use isNaN() to display false.
document.write("<br>isNaN false: " + isNaN(10));


// Infinity Assignment
// Display Infinity and -Infinity.
document.write("<br>Infinity: " + 1E309);
document.write("<br>-Infinity: " + -1E309);


// Boolean Assignment
// Use greater than and less than operators.
document.write("<br>Greater than: " + (10 > 5));
document.write("<br>Less than: " + (10 < 5));


// console.log() Assignment
// Perform a math operation in the console.
console.log(10 + 5);


// Boolean Challenge
// Display false in the console.
console.log(10 < 5);


// Double Equal Signs Assignment
// Use == to return true and false.
document.write("<br>Double equal true: " + (10 == 10));
document.write("<br>Double equal false: " + (10 == 5));


// Triple Equal Signs Assignment
// Same type and same value = true.
document.write("<br>Triple equal 1: " + (10 === 10));

// Different type and different value = false.
document.write("<br>Triple equal 2: " + (10 === "5"));

// Different type but same value = false.
document.write("<br>Triple equal 3: " + (10 === "10"));

// Same type but different value = false.
document.write("<br>Triple equal 4: " + (10 === 5));


// AND Operator Assignment
// && returns true when both conditions are true.
document.write("<br>AND true: " + (10 > 5 && 10 < 20));
document.write("<br>AND false: " + (10 > 5 && 10 < 5));


// OR Operator Assignment
// || returns true when at least one condition is true.
document.write("<br>OR true: " + (10 > 5 || 10 < 5));
document.write("<br>OR false: " + (10 < 5 || 10 < 2));


// NOT Operator Assignment
// ! changes true to false and false to true.
document.write("<br>NOT true: " + (!false));
document.write("<br>NOT false: " + (!true));