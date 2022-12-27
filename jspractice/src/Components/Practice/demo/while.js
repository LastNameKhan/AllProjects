// The while loop loops through a block of code as long as a specified condition is true.

// let i = 0;
let find = 5;
let skip = 2;


let i = 0;
do {
    console.log(i)
    
    if(i==3) {
        i += 2
    } else if(i==7) {
        i+=3
    }
    i += 2
} while(i<0)