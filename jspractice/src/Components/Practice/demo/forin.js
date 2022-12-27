//The JavaScript for in statement can loop over
// the properties of an Array and Object.



// const ar = [45, 4, 9, 16, 25];


// for(key in ar) {

//     console.log(ar[key])
// }





const obj = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// let key = 'lastName';
// console.log(obj[key])

// // let key = 'firstName';
// // console.log(obj[key])
for (key in obj) {
    if(key === 'age') {
        break;
    }
    console.log(obj[key])
    
}