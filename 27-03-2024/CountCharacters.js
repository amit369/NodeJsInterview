let str="My name is Amit Chaman";

let obj = [];

for(let i=0;i<str.length-1;i++)
{
    obj[str[i]]=0;
}


for(let i=0;i<str.length-1;i++)
{
    obj[str[i]]+=1;
}

console.log(obj);