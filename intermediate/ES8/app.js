//PAD START

//eg
"turtle".padStart();
"turtle".padEnd();

//eg
const fun = (a, b, c, d) => {
    console.log(a);
}
fun(1, 2, 3, 4);

//eg
let obj = {
    username: "Santa",
    username1: "Rudolf",
    username2: "Grinch",
}
// Object.keys(obj).forEach(key, index => {
//     console.log(index, obj[key]);
// })          ?????

//eg
Object.values(obj).forEach(value => {
    console.log(value);
})

//eg
Object.entries(obj).forEach(value => {
    console.log(value);
})

//eg
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})