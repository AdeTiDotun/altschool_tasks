// when we treat rest, it is the last thing(s) that we want to be added to our function; it's denoted by "...rest".
function add(a, b, ...rest) {
    let numRest = 0;
    for (i = 0; i < rest.length; i++) {
        numRest = numRest + rest[i];
    }
    return a + b + numRest;
}

console.log(add(1, 2, 4, 5, 6, 10));
   
