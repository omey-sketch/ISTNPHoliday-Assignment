// Create an object where the object keys store values of 
// different data types and use typeof operator to check the data 
// type of the value that you stored into it.

let dataType = {
    number : 1,
    bigInt : 1n,
    boolean : false,
    null : null,
    undefined : undefined,
    symbol : Symbol("Hello")
}
console.log(typeof(dataType.number));
console.log(typeof(dataType.bigInt));
console.log(typeof(dataType.boolean));
console.log(typeof(dataType.null));
console.log(typeof(dataType.undefined));
console.log(typeof(dataType.symbol));

