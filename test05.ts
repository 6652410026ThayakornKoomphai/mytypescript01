//3. no parameter / has return

function funcC() : string {
    console.log('wooo')
    return 'hello'
}

//4. have parameter / has return
function funcD (n1: number, n2 : number, n3 : number) : number{
    return n1 + n2 + n3

}

console.log(funcC())
let result : number = funcD(10,20,30)
console.log(result)