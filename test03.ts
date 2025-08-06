//ชนิดของข้อมูล (number string boolean array object )
let data1 : number 
data1 = 20
let data2: string
data2 = 'hello'
data2 = "hi"
data2 = '999'

let data3 : boolean
data3 = true
data3 = false

let data4 : string[] = []
data4[0] = 'hello'
data4[1] = 'hi'
data4[2] = '999'
// data4[3] = 555

let data5 :(string | number | boolean) [] = []
data5[0] = 'hello'
data5[1] = 555
data5[2] = '999'
data5[3] = true

let data6 : number[] = [10,20,30,40]

let data7 :  {
    name: string,
    age: number,
    salary : number
}

data7 = {
    name: 'sombat',
    age: 25,
    salary : 15000.00
}
console.log(data7.name)