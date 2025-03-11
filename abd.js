console.log("First")

function a()
{
    let sum=0
    for(let i=0;i<10000000000;i++)
    {
        sum+=i
    }
    console.log(sum);
    
}
a()
console.log("End");





console.log("First")

async function a()
{  await new Promise((resolve)=>{
    let sum=0
    for(let i=0;i<10000000000;i++)
    {
        sum+=i
    }
    console.log(sum);
    
}
}

a()
console.log("End");
