/* ---------------------------------------------- object destructuring ------------------------------------------------- */
// single object
const todayCookItems = {
    potatoQuantity : 7,
    potatoPrice : 15,
    rice : 50, 
    lentilSoup : 80
}
const { rice, lentilSoup, potatoPrice } = todayCookItems;
console.log(rice, lentilSoup);
console.log(lentilSoup, potatoPrice);

// nesting object
const fish = {
    id: 47,
    name: `king ellisa`,
    weight: {
        large: `1.5kg`,
        medium: `1kg`,
        small: `800g`,
        extraSmall: `400g`
    },
    price: {
        largeFish: `1500TK`,
        mediumFish: `1000`,
        smallFish: `700`,
        extraSmall: `400`
    },
    color: `goldenWhite`,
}
const { id, name, color } = fish;
console.log(id, name, color);
const { large, medium, small } = fish.weight;
console.log(large, medium, small);
const { mediumFish, smallFish, extraSmall } = fish.price;
console.log(mediumFish, smallFish, extraSmall);


// ES5
/* const rice = todayCookItems.rice;
const lentilSoup = todayCookItems.lentilSoup;
const potatoPrice = todayCookItems.potatoPrice;
console.log(rice, lentilSoup);
console.log(rice, potatoPrice);
console.log(rice, lentilSoup);
console.log(rice, potatoPrice);
console.log(rice); */



/* ----------------------------------------------------- array destructuring ---------------------------------------------- */
const myFriends = ['sabbir', 'jihad', 'tareque', 'ferdous', 'sagor', 'rakib', 'akib'];
const [mota, tagra, patu, ] = myFriends;
console.log(mota, tagra, patu);
const [num1, num2, num3] = [4, 7, 9, 11, 13, 15];
console.log(num1, num2, num3);


/* ---------------------------------------------------- chaining(?) --------------------------------------------------------- */
console.log(fish.weight.large);
console.log(fish?.p?.q)