/* ---------------------------------------------------- function Expression ---------------------------------------------- */
// option 01
function additionNumber(num1, num2) {
    return num1 + num2
} 
console.log(additionNumber(4, 15));

// option 02
const subtractionNumber = function subtraction(num1, num2) {
    return num1 + num2;
};
console.log(subtractionNumber(5, 4));

// option 03 (anonymous function)
const divisionNumber = function (num1, num2) {
    return num1 / num2;
}
console.log(divisionNumber(4, 5));

/* ------------------------------------------------ Arrow Function --------------------------------------------------- */
// option 01 (one parameter arrow function)
// const anonymousArrowFunction = (num1) => num1 * num1;
const anonymousArrowFunction = (num1) => num1 * num1;
console.log(anonymousArrowFunction(10));

// option 02 (one line arrow function)
const arrowFunction1 = (num1, num2) => num1 + num2;
console.log(arrowFunction1(7, 4));

// option 03 (multiline arrow function)
const multilineArrowFunction = (num1, num2, num3) => {
    const addNumber = num1 + num2;
    const subtractionNumber = num3 - num2;
    const multiplicationNumber = addNumber * subtractionNumber;
    return multiplicationNumber;
} 
console.log(multilineArrowFunction(4, 7, 9));