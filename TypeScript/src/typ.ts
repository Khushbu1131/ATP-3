
let number:number[] = [2, 3, 5];
console.log(number);

let person : {name:string;age:number}={name:"rahi",age:24}
console.log(person.age)

function add(a:number,b:number):number
{
    return a+b
}
console.log(add(5,5))


let value:any="rahi"
//value=10
console.log(value)


enum Role{Admin=100,User=500,Guest=400}
console.log(Role.User)



let Person:[string,number]=["Abd",5]
console.log(Person)



type id=number|string
let userid1:id=123
let userid5:id="22-46947-1"
console.log(userid5)

let val:string|number
val=2
//val="Rahi"
console.log(val)

let sta:"success"|"error"
sta="success"
console.log(sta)


interface p1
{
    name :string;
    age:number;
    address?:string
}

let u1:p1={name:"rahi",age:10}
console.log(u1)


function add1<T>(value:T):T
{
    return value
}
let num=add1<string>("sssss")
console.log(add1<number>(20))
console.log(num)


function add2<T,U>(value:T,second:U):[T,U]
{
    return [value,second]
}
let num2=add2<number,string>(10,"shehryar")

console.log(num2)








class abd <T>
{
    private ab;
    constructor(value:T)
    {
        this.ab=value
    }

    getData():T{
        return this.ab
    }
}

   
let nData=new abd<number>(100)
    console.log(nData)
    console.log(nData.getData())

    let nData1=new abd<string>("ZGH")
    console.log(nData1.getData())

