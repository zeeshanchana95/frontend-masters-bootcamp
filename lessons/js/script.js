//scope example

let something = 'outside the function';
let thingToKeep;

function thing() {
    let something = 'outside the if statement';
    if(true) {
        let something = 'inside the if statement';
        console.log(something)
    }
    console.log(something);
    thingToKeep = 'defined now';
}

thing();

console.log(something);
console.log(thingToKeep);