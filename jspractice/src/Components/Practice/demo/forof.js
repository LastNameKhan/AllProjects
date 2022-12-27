// const ar = [[45, "test"], {name: 'test'}, "test", 16, 25];


// for(i of ar) {
//     // console.log(typeof i)
//     if(Array.isArray(i) || typeof i !== 'object') {
//         continue
//     }
//     console.log(i.name)
//     //

// }


















const obj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

for(key of obj) {
    console.log(key)
}