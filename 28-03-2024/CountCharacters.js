let str="my name is amit chaman";

let obj = {};

for(let i=0;i<str.length;i++)
{
    obj[str[i]]=0;
}
for(let j=0;j<str.length;j++)
{
    obj[str[j]]+=1;
}
console.log('obj ', obj);