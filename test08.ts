//class instant
class student{
    fname : string = ''
    age : number   = 0

    //constructor
    constructor(){
        console.log('DTI HI')
    }

    //method
    showInfo(){
        console.log(`hi ${this.fname}` )
        console.log(`your age  ${this.age}` )
    }
}
let ob1 = new student()
let ob2 = new student()

ob1.fname = 'sombat'
ob2.age = 20
ob1.showInfo()