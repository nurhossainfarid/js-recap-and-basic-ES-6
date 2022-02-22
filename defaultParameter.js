// number function
function additionNumbers(num1, num2 = 7) {
    // option 01
    // num2 = num2 || 0;
    // option 02
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const addition = num1 + num2;
    return addition;
}
console.log(additionNumbers(52));

// string function
function myName(firstName, lastName = 'Farid') {
    const name = firstName + lastName;
    return name;
}
console.log(myName('Nur Hossain '));