//espress function
let sum1 = function (h1:number, h2:number) {
    console.log(h1+h2);
}
let sum2 = (h1:number, h2:number) => {
    console.log(h1+h2);
}

let sum3 = (h1:number, h2:number): number => {
    return h1+h2
}

sum1 (10,20)
sum2 (10,40)
console.log(sum3(50,60))