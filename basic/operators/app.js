//I. Mathematical operators
//1.Comparison

//a. greater than
// console.log(2 > 1);

 //b. greater than
// console.log(5 > 10);

 //c. greater than/ equal to
// console.log(15 >= 15);
// console.log(15 <= 14);

 //d. less than or equal to
// console.log(15 <= 15);
// console.log(15 <= 14);

//e. == operator => cares only about the value, not the type => causes type coercion
// console.log(1 == '1');
// console.log(1 == 1);
// console.log(true == true);
// console.log(false == true);
// console.log(0 == "");
// console.log(undefined == null);
// console.log(false == 0);
// console.log(true == 1);

//f. === operator => checks also for the type
// console.log(1 === '1');
// console.log(1 === 1);
// console.log(true === true);
// console.log(false === true);
// console.log(0 === "");
// console.log(undefined === null);
// console.log(false === 0);
// console.log(true === 1);

//g. non-equality operator !=
// console.log(1 != '1');
// console.log(1 != 1);
// console.log(true != true);
// console.log(false != true);
// console.log(0 != "");
// console.log(undefined != null);
// console.log(false != 0);
// console.log(true != 1);

//h.strict non-equality operator
// console.log(1 !== '1');
// console.log(1 !== 1);
// console.log(true !== true);
// console.log(false !== true);
// console.log(0 !== "");
// console.log(undefined !== null);
// console.log(false !== 0);
// console.log(true !== 1);

//II. Logical operators
//1. and &&
if (10 > 5 && 5 > 4) {
    console.log('Success')
}

let age = 11;
if (age >= 1 && age <= 12) {
    console.log('minor')
} else if (age >= 13 && age <= 18) {
    console.log('teenager')
} else {
    console.log('adult');
}

//2. or ||
if (2 > 3 || 5 < 7) {
    console.log('Error');
}

//3. not ! => it returns true if any expression is false
let temp = 22;
if (!(temp === 20)) {
    console.log('Really');
}