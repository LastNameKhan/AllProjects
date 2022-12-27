const arr = [12, 1, [32, 54], [4, [[[[3]]]]], [[5, [6]]]];
//[12,32,54,2,3,5,6]

const temp = []
const myFunc = (ar) => {
    // console.log('ar',ar)
    ar.map(i => {
        // console.log(i)
        if(!Array.isArray(i)) {
            temp.push(i)
        } else {
            myFunc(i)
        }
        // if(Array.isArray(i)) {
        //     myFunc(i)
        // } else {
        //     temp.push(i)
        // }
    })
    
    return temp
}

console.log(myFunc(arr));