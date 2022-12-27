const arr = [
    {name: "ABC", age: 18},
    {name: "DEF", age: 30},
    {name: "XYZ", age: 50},
    {name: "wxy", age: 15},

]

// const temp = ["ABC", "DEF"]

console.log(arr)
arr.forEach((element, index) => {
    if(index==1) {
        element.name = "test"
    }
    // console.log(element, index)
    // return element
});
console.log(arr)


// arr.filter((element, index) => {
//     return temp.includes(element.name)
// }).map(i=> {
//     console.log(i)
// })

// console.log(result)

// arr.map((element, index) => {
//     console.log(element, index)
    
// })

// const result = arr.map((element, index) => {
//     console.log(element, index)
//     if(index==1) {
//         element.name = "test"
//     }
//     // return '<h1>'+index+'</h1>'
// })

// console.log(result)