const obj = {
    firstName: {name: "Test"},
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const temp = Object.entries(obj);

for( i in temp) {
    console.log(temp[i])
}

// console.log(Object.entries(obj))





