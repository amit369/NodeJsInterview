
let str="my name is amit chaman";
let count = {};

for(let i=0;i<str.length;i++)
{
    count[str[i]]=0;
}
for(let i=0;i<str.length;i++)
{
    count[str[i]]+=1;
}
console.log(count);