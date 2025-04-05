const a=[2,3,4]
const b=[...a,5,6,7]
console.log(b); 

const car=
{
    name:"BMW",
    model:2021,
    color:"Red"
}

const modify=
{
    color:"Green"
}

//const afterModify={...car,... modify}
const afterModify={... modify,...car}
console.log(afterModify)


//Destructuring

const car1=[2021,"BMW","Mirpur"]
const [suv,,od]=car1
console.log(suv,od)



//Map



const a1=[3,5,2]
const d= a1.map(x=>x*3)
console.log(d)

//Filter

const a2=[4,5,10]
const e=a2.filter(x=>x%2==0)
console.log(e)

//Math Function

const n1=3.9
console.log(Math.floor(n1))

console.log(Math.round(Math.random()*10)+255)