//flat(), flatMap(), trimStart(), trimEnd()

//eg
const array = [1, 2, 3, 4, 5];
array.flat();

//eg
const array2 = [1, [2, 3], [4, 5]];
array2.flat();

//eg
const array3 = [1, 2, [3, 4, [5]]];
array3.flat();
array3.flat(2);

//eg
const entries = ["bob", "sally", "cindy"];
entries.flat();

//eg
const userProfiles = [["Tom", 23], ["Derek", 40], ["Hansel", 23]];
Object.fromEntries(userProfiles);
Object.entries(userProfiles);


//eg
try {
    true + "hi"
} catch (error) {
    console.log("You messed up", error)
}