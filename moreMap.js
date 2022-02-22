const myFriend = ['modavai', 'sallu', 'fethu', 'sagol', 'gora'];
const output = myFriend.map(friend => friend.length);
console.log(output);

// object in array
const products = [
    {
        name: 'CoconutBites',
        price: `10 tk`,
        color: `green`
    },
    {
        name: 'Mobile Phone',
        price: `2100 tk`,
        color: 'blue'
    },
    {
        name: `Laptop`,
        price: `89000 tk`,
        color: `black`
    }, 
    {
        name: `Con glass`,
        price: `800 tk`,
        color: `black`
    }
]
const productsName = products.map(product => product.name);
console.log(productsName);
const productsPrice = products.map(product => product.price);
console.log(productsPrice);
const productsColor = products.map(product => product.color);
console.log(productsColor);

// use console log in map
// products.map(product => console.log(product))
// when you don't return . map or forEach play same roles without one thing. Map return an array but forEach can't return anything
products.forEach(product => console.log(product));