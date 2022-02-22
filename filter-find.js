/* ---------------------------------------------- filter() --------------------------------------------------- */
// filter() similar to map() but filter work for condition and provided an new array which element fill up this condition
const numbers = [4, 7, 13, 94, 92, 47];
const biggerThenNinety = numbers.filter(number => number > 90);
const smallerThenTwenty = numbers.filter(number => number < 20);
const similarNumbers = numbers.filter(number => (number == 4))
console.log(biggerThenNinety, smallerThenTwenty, similarNumbers);

// object in array
const products = [{
        name: 'CoconutBites',
        price: 10,
        color: `green`
    },
    {
        name: 'Mobile Phone',
        price: 21000,
        color: 'blue'
    },
    {
        name: `Laptop`,
        price: 89000,
        color: `black`
    },
    {
        name: `Con glass`,
        price: 800,
        color: `black`
    }
];

const expensive = products.filter(product => product.price > 10000);
const colorChoose = products.filter(product => product.color)
console.log(expensive, colorChoose);

/* ------------------------------------------------- find() -------------------------------------------------- */
// find() like this array but it has one different. find() provided first element maintain condition. It not creat any array.It only provide element.
const expensiveProduct = products.find(product => product.price > 10000);
console.log(expensiveProduct);

const myFriend = ['sabbir', 'salman', 'tareque', 'ferdous', 'rakib', 'sagor'];
const firstOddFriend = myFriend.find(name => name.length % 2 != 0);
const fiveLetterName = myFriend.find(name => name.length == 5)
console.log(firstOddFriend, fiveLetterName);