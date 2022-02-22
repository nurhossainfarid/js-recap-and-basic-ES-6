const numbers = [2, 4, 7, 9];
const output = [];

// normal function
/* function doubleOld(number) {
    return number * 2;
} */

// arrow function
const doubleIt = number => number * 2;

// loop through each element
for (const number of numbers) {
    const result = doubleIt(number); //for each element call the provided function
    output.push(result); //result for each element stored an array
}
console.log(output);

/* ----------------------------------------------------- Array -------------------------------------------------------------- */
/*
1) loop for each element
2) for each element call the provided function 
3) result for each element stored an array  
 */
// const mapOutput = double.map(doubleIt);
// const mapOutput = double.map(number => number * 2);
const mapOutput = numbers.map(x => x * 2);
console.log(mapOutput);

const square = numbers.map(x => x * x);
console.log(square);